Feature: Login no Automation Test Store

    Background:
        Given Que estou na página de login do Automation Test Store

    Scenario: Login com sucesso
        When Preencho o campo "login name" com um dado válido
        And Preencho o campo "password" com um dado válido
        And Clico no botão de login
        Then Sou redirecionado para a página inicial

    Scenario: Login com usuário inválido
        When Preencho o campo "login name" com um dado inválido
        And  Preencho o campo "password" com um dado válido
        And Clico no botão de login
        Then Vejo a mensagem de erro "Error: Incorrect login or password provided."

    Scenario: Login com senha inválida
        When Preencho o campo "login name" com um dado válido
        And Preencho o campo "password" com um dado inválido
        And Clico no botão de login
        Then Vejo a mensagem de erro "Error: Incorrect login or password provided."

    Scenario: Login com campos vazios
        When Deixo o campo "login name" vazio
        And Deixo o campo "password" vazio
        And Clico no botão de login
        Then Vejo a mensagem de erro "Error: Incorrect login or password provided."