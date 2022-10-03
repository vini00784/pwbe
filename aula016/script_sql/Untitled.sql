# Permite visualizar todos os databases existentes no BD
show databases;

# Comando para criar um database
create database db_contatos20222;

# Comando para excluir um database e toda a sua estrutura de tabelas e dados
drop database db_contatos20222;

create database db_lion_school;

# Permite ativar o uso do database (é como dar 2 cliques em uma pasta para manipular ela)
use db_lion_school;

# Permite visualizar todas as tabelas existentes dentro de um database
show tables;

create table tbl_aluno (
	id int unsigned not null auto_increment primary key,
    nome varchar(80) not null,
    foto varchar(100) not null,
    sexo varchar(1),
    rg varchar(15) not null,
    cpf varchar(18) not null,
    email varchar(256) not null,
    telefone varchar(18),
    celular varchar(18),
    data_nascimento date not null,
    unique index(id)
);

create table tbl_curso (
	id int unsigned not null auto_increment primary key,
    nome varchar(50) not null,
    carga_horaria int not null,
    icone varchar(100),
    sigla varchar(8),
    unique index(id)
);

create table tbl_aluno_curso (
	id int unsigned not null auto_increment primary key,
	id_aluno int unsigned not null,
    id_curso int unsigned not null,
    matricula varchar(18) not null,
    status_aluno varchar(10) not null,
    
    # Programação para definir uma chave estrangeira
    foreign key (id_aluno) # Define qual atributo desta tabela será uma FK
		references tbl_aluno(id), # Define de onde virá a PK
	foreign key (id_curso)
		references tbl_curso(id),
	
    unique index(id)
);

# Permite visualizar todos os dados de todas as colunas de uma tabela
select * from tbl_aluno;

#
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('José da Silva', 'https://www.flaticon.com/br/icone-gratis/pessoa_1373255', 'M', 
			'34.456.666-1', '300.567.456-23', 'jose@gmail.com', '011 4556-777', '011 9 9765-6660', '2000-04-10');
            
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('Maria da Silva', 'https://www.flaticon.com/br/icone-gratis/pessoa_1373254', 'F', 
			'23.988.982-1', '304.567.345-29', 'maria@gmail.com', '011 4678-7666', '011 9 8709-0988', '1910-10-10');

# Permite alterar o valor de um atributo da tabela
	# OBS.: É de extrema importância a especificação de qual registro vai sofrer a alteração, a não especificação acarreta numa alteração GERAL!
    # Essa especificação geralmente é feita pelo ID (ou pela chave primária)
update tbl_aluno set telefone = '011 8439-1239' where id = 1; # Lê-se: atualizar o atributo telefone na tbl_aluno onde o ID é igual a 1
update tbl_aluno set data_nascimento = '1990-01-04' where id = 2; # Lê-se: atualizar o atributo data_nascimento na tbl_aluno onde o ID é igual a 2

# Permite apagar um registro de uma tabela do Banco de Dados
	# OBS.: É de extrema importância a especificação de qual registro vai sofrer a exclusão, a não especificação acarreta numa exclusão GERAL!
    # Essa especificação geralmente é feita pelo ID (ou pela chave primária)
delete from tbl_aluno where id = 1; 








