drop table if exists Task;

CREATE TABLE Task (
	taskId binary (20) not null,
	taskTitle varchar(255) not null,
	taskStartDate datetime,
	taskDueDate binary,
	taskStatus varchar (64) not null,
	taskPriority char (64) not null,
	taskDescription varchar (256),
	primary key(taskId)
);

/**
  2. For the DDL described in the Data Design Project overview, create an SQL SELECT statement that gets me the following information for the Tweet with the (hexified) id 0536faef082b454e9d444cdbe7887d7a.
tweetContent
profileAtHandle of all users who have liked the Tweet
 */

SELECT tweet.tweet.Content, profile.profileAtHandle
FROM tweet
INNER JOIN `like` ON like.likeProfileId = profile.profileId
WHERE tweet.tweetId = '0536faef082b454e9d444cdbe7887d7a');


