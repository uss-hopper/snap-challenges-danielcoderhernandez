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
}

