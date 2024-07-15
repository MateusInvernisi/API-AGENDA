--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos (
    id integer NOT NULL,
    titulo text NOT NULL,
    data_hora timestamp without time zone NOT NULL,
    descricao text,
    usuario_id integer
);

--
-- Name: evento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_id_seq OWNED BY public.eventos.id;

--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome character varying NOT NULL,
    email character varying NOT NULL,
    senha character varying NOT NULL
);

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;

--
-- Name: eventos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos ALTER COLUMN id SET DEFAULT nextval('public.evento_id_seq'::regclass);

--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);

--
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.eventos (id, titulo, data_hora, descricao, usuario_id)
SELECT 18, 'Fim de ano', '2025-12-19 18:36:00'::timestamp, 'festa', 3
UNION ALL
SELECT 3, 'Aniversário de João', '2024-04-23 23:14:00'::timestamp, 'Celebração do aniversário de João com amigos e família.', 1
UNION ALL
SELECT 19, 'Reunião de Equipe', '2024-04-15 10:00:00'::timestamp, 'Discussão dos próximos projetos da equipe de desenvolvimento.', 1
UNION ALL
SELECT 1, 'Reunião de Equipe', '2024-04-27 22:15:00'::timestamp, 'Discussão dos próximos projetos da equipe de desenvolvimento.', 1;

--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuarios (id, nome, email, senha)
SELECT 3, 'Wilian', 'Wiliansantos@gmail.com', '555710'
UNION ALL
SELECT 1, 'MATEUS', 'mateusinvernsisi@hotmail.com', '555710'
UNION ALL
SELECT 13, 'Bob', 'bob@example.com', 'bob123'
UNION ALL
SELECT 15, 'Carol', 'carol@example.com', 'carol123'
UNION ALL
SELECT 16, 'David', 'david@example.com', 'david123'
UNION ALL
SELECT 17, 'Emma', 'emma@example.com', 'emma123'
UNION ALL
SELECT 19, 'Grace', 'grace@example.com', 'grace123'
UNION ALL
SELECT 20, 'Henry', 'henry@example.com', 'henry123'
UNION ALL
SELECT 21, 'Isabella', 'isabella@example.com', 'isabella123'
UNION ALL
SELECT 22, 'Jack', 'jack@example.com', 'jack123'
UNION ALL
SELECT 23, 'Kate', 'kate@example.com', 'kate123'
UNION ALL
SELECT 24, 'Liam', 'liam@example.com', 'liam123'
UNION ALL
SELECT 25, 'Mia', 'mia@example.com', 'mia123'
UNION ALL
SELECT 26, 'Olivia', 'olivia@example.com', 'olivia123'
UNION ALL
SELECT 12, 'Alice', 'alice@exp.com', 'senha123'
UNION ALL
SELECT 49, 'pedro', 'sad@gmai.com', '123'
UNION ALL
SELECT 50, 'pedro', 'sd@gmai.com', '123'
UNION ALL
SELECT 53, 'abc', 'abc@gmail.com', '123';

--
-- Name: evento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_id_seq', 19, true);

--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 53, true);

--
-- Name: eventos evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT evento_pkey PRIMARY KEY (id);

--
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);

--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);

--
-- Name: eventos evento_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT evento_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON DELETE CASCADE;

--
-- PostgreSQL database dump complete
--
