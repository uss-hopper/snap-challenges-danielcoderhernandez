<?php

		/**
		 * accessor method for get tweets by tweet id
		 * @return \DateTime value of all tweets on date in question
		 */

		public function getTweetsByTweetDate() : \DateTime{
			return ($this->tweetsByTweetDate);
}

		/**
		 * mutator method for tweets date
		 *
		 * @param \DateTime|string|null $newTweetsDate tweets date as a DateTime object of string
		 * @throws \InvalidArgumentException if new $newTweetsDate is not a valid object or sting
		 * @throws \RangeException if $newTweetsDate is a date that does not exist
		 */

		public function setTweetsDate($newTweetsDate = null) : void {
			//if the date is null use the current date and time
			if($newTweetsDate === null) {
				$this->tweetsDate = new \DateTime();
				return;
			}

			//store the like date using the ValidateDate trait
			try{
				$newTweetsDate = self::validateDateTime($newTweetsDate);
			} catch(\InvalidArgumentException | \RangeException $exception) {
				$exceptionType = get_class($exception);
				throw (new $exceptionType($exception->getMessages(), 0, $exception));
			}
			$this->tweetsDate = $newTweetsDate;

	/**
	 * gets the Tweet by profile id
	 *
	 * @param \PDO $pdo PDO connection object
	 * @param Uuid|string $tweetProfileId profile id to search by
	 * @return \SplFixedArray SplFixedArray of Tweets found
	 * @throws \PDOException when mySQL related errors occur
	 * @throws \TypeError when variables are not the correct data type
	 **/
	public static function getTweetByTweetProfileId(\PDO $pdo, $tweetProfileId) : \SplFixedArray {

		try {
			$tweetProfileId = self::validateUuid($tweetProfileId);
		} catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
			throw(new \PDOException($exception->getMessage(), 0, $exception));
		}

		// create query template
		$query = "SELECT tweetId, tweetProfileId, tweetContent, tweetDate FROM tweet WHERE tweetProfileId = :tweetProfileId";
		$statement = $pdo->prepare($query);
		// bind the tweet profile id to the place holder in the template
		$parameters = ["tweetProfileId" => $tweetProfileId->getBytes()];
		$statement->execute($parameters);
		// build an array of tweets
		$tweets = new \SplFixedArray($statement->rowCount());
		$statement->setFetchMode(\PDO::FETCH_ASSOC);
		while(($row = $statement->fetch()) !== false) {
			try {
				$tweet = new Tweet($row["tweetId"], $row["tweetProfileId"], $row["tweetContent"], $row["tweetDate"]);
				$tweets[$tweets->key()] = $tweet;
				$tweets->next();
			} catch(\Exception $exception) {
				// if the row couldn't be converted, rethrow it
				throw(new \PDOException($exception->getMessage(), 0, $exception));
			}
		}
		return($tweets);
	}
