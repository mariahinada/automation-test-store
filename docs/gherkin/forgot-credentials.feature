Feature: Esqueci o Login no Automation Test Store

    Background:
        Given Que estou na página inicial
        When Clico no botão "Login or Register"

    Scenario: Recuperar senha
        And Clico no botão "Forgot your password?"
        And Preencho o campo "Login Name", com "usuario"
        And Preencho o campo "E-mail", com "usuario@exemplo.com"
        And Clico no botão "Continue"
        Then Vejo a mensagem "Success: Password reset link has been sent to your e-mail address."

    Scenario: Recuperar senha com usuário inválido
        And Clico no botão "Forgot your password?"
        And Preencho o campo "Login Name", com "usu"
        And Preencho o campo "E-mail", com "usuario@exemplo.com"
        And Clico no botão "Continue"
        Then Vejo o alerta "Error: No records found matching information your provided, please check your information and try again!"

    Scenario: Recuperar senha com e-mail inválido
        And Clico no botão "Forgot your password?"
        And Preencho o campo "Login Name", com "usuario"
        And Preencho o campo "E-mail", com "usuario@exemplo"
        And Clico no botão "Continue"
        Then Vejo o alerta "Error: No records found matching information your provided, please check your information and try again!"

    Scenario: Recuperar usuário
        And Clico no botão "Forgot your login name?"
        And Preencho o campo "Last Name", com "Sobrenome"
        And Preencho o campo "E-mail", com "usuario@exemplo.com"
        And Clico no botão "Continue"
        Then Vejo a mensagem "Success: Your login name reminder has been sent to your e-mail address."

    Scenario: Recuperar usuário com sobrenome inválido
        And Clico no botão "Forgot your login name?"
        And Preencho o campo "Last Name", com "So"
        And Preencho o campo "E-mail", com "usuario.exemplo.com"
        And Clico no botão "Continue"
        Then Vejo o alerta "Error: No records found matching information your provided, please check your information and try again!"

    Scenario: Recuperar usuário com e-mail inválido
        And Clico no botão "Forgot your login name?"
        And Preencho o campo "Last Name", com "Sobrenome"
        And Preencho o campo "E-mail", com "usuario@exemplo"
        And Clico no botão "Continue"
        Then Vejo o alerta "Error: No records found matching information your provided, please check your information and try again!"