create table author (
	id			varchar(10),
	name		varchar(40),
	primary key(id)
);

create table book (
	ISBN				numeric(13, 0),
	title				varchar(60),
	price				numeric(4, 2),
	num_pages			int,
	quantity			int, 
	commission			numeric(2, 2),
	publisher_name			varchar(40),
	primary key (ISBN),
	foreign key (publisher_name) references publisher (publisher_name),
	check (num_pages > 0 and commission < 1 and ISBN > 0)
);


create table user (
	id			varchar(10),
	username		varchar(30),
	password		varchar(30),
	email			varchar(50),
	billing_id		varchar(10),
	shipping_id		varchar(10),
	primary key (id),
	foreign key (billing_id) references billing_detail (id),
	foreign key (shipping_id) references address (id)
);

create table address (
	id			varchar(10),		
	street			varchar(40),
	street_num		numeric(4, 0),
	postal_code		varchar(6),
	province		varchar(40),
	city			varchar(40),
	country			varchar(40),
	primary key (id)
);

create table billing_detail ( 
	id			varchar(10),
	card_number		numeric(16, 0),
	cvv			numeric(3, 0),
	user_id			varchar(10),
	address_id		varchar(10),
	primary key (id),
	foreign key (address_id) references address (id),
	foreign key (user_id) references user (id),
	check (card_number > 0 and cvv > 0)
);

create table publisher (
	id			varchar(10),
	publisher_name		varchar(40),
	email			varchar(50),
	phone_num		numeric(10, 0),
	banking_account		numeric(7, 0),	
	primary key (publisher_name)

);

create table genre (
	genre_id	varchar(10),
	genre_name	varchar(40),
	primary key (genre_id)
);


create table shopping_cart (
	id			varchar(10),
	ISBN		numeric(13, 0),	
	quantity	int,
	cost		numeric(4,2),
	user_id		varchar(10),
	primary key (id, ISBN),
	foreign key (user_id) references user (id),
	foreign key (ISBN) references book (ISBN)
);

create table order (
	order_num		varchar(10),
	user_id			varchar(10),
	date			date,
	tracking		varchar(10),
	billing_id		varchar(10),
	shipping_id		varchar(10), 
	primary key (order_num),
	foreign key (user_id) references user (id),
	foreign key (billing_id) references billing_detail (id),
	foreign key (shipping_id) references address (id)
);

create table order_contains (
	order_num		varchar(10),
	ISBN			numeric(13, 0),
	quantity 		int,
	price_total		numeric(4,2),
	primary key (order_num, ISBN), 
	foreign key (order_num) references order (order_num),
	foreign key (ISBN) references book (ISBN)
);