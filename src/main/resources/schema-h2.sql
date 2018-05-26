create table Kitap(
isbn_no bigint not null primary key,
kitap_adi varchar(255),
seri_adi varchar(255),
yazar_adi varchar(255),
yayin_adi varchar(255),
aciklama varchar(1000),
resim varchar(255)
);

create table Yazar(
isbn_no bigint not null primary key,
yazar_adi varchar(255),
kitap_adi varchar(255),
aciklama varchar(1000),
resim varchar(255)
);

create table Yayin_Evi(
isbn_no bigint not null primary key,
yayin_adi varchar(255),
kitap_adi varchar(255),
aciklama varchar(1000)
);

