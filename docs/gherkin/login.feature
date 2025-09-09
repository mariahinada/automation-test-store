Feature: Criação de Conta no Automation Test Store

Scenario: Criando Conta
    Given Que estou na página inicial
    When Clico no botão "Login or Register"
    And Encontro botão de "Continue" para criar uma Conta
    And Preencho o campo "Name", com "Nome"
    And Preencho o campo "Last Name", com "Sobrenome"
    And Preencho o campo "E-mail", com "usuario@exemplo.com"
    And Preencho o campo "Telephone", com "0000-0000"
    And Preencho o campo "Fax", com "123"
    And Preencho o campo "Company", com "Empresa"
    And Preencho o campo "Address 1", com "Endereço 1"
    And Preencho o campo "Address 2", com "Endereço 2"
    And Preencho o campo "City", com "Cidade"
    And Seleciono a opção Estado, com "Sao Paulo"
    And Preencho o campo "ZIP Code", com "00000-000"
    And Seleciono o país, com "Brazil"
    And Preencho o campo "Login Name", com "usuario"
    And Preencho o campo "Password", com "senha123"
    And Preencho o campo "Password Confirm", com "senha123"
    And Seleciono a opção de newsletter "yes"
    And Marco o checkbox "I have read and agree to the Privacy Policy"
    And Clico no botão "Continue"
    Then Sou redirecionado para a tela com o texto "Your Account Has Been Created!"