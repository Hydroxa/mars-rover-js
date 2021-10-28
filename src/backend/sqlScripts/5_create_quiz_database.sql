CREATE TABLE quiz (
	id SERIAL PRIMARY KEY,
	question varchar(150),
	correct_answer int,
	answer_one varchar(50),
	answer_two varchar(50),
	answer_three varchar(50),
	answer_four varchar(50)
)