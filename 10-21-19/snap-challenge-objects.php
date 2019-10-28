<?php

class cow {
	/**id for cow; this is the primary key
	 *
	 * */
	private $cowId;
	/**
	 *
	 */
	private $cowEmail;
	/**
	 * accessor method for cow id
	 */
	public function getCowId(): Uuid {
		return (this->cowId);
	}

	/**accessor method for cow id
	 * @return Uuid value of cow id  (or null if new cow)
	 * **/

	public function getCowId(): Uuid {
			return ($this->cowId);
	}

	/**
	 * mutator method for cow id
	 * @param Uuid| string $newCowId value of the new cow id
	 * @throws \RangeException if $newCowId is not positive
	 * @throws \TypeError if the author If is not
	 */

	public function setCowId($newCowId): void {
		try {
			$uuid = self::validateUuid($newCowId);
		} catch(\InvalidArgumentException | \RangeException |\Exception |TypeError $exception) {
				$exceptionType = get_class($exception);
					throw(new $exceptionType($exception->getMessage(),0, $exception));
		}
		//convert and store the cow id
			$this->cowId = $uuid;
	}

	/**
	 * accessor method for email
	 *
	 * @return string value of email
	 */

}