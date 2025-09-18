Feature: Fluxo de Compra no Automation Test Store

    Background:
        Given Que estou logado em uma conta válida
        When Acesso a home

    Scenario: Adicionar produto simples ao carrinho
        Given Adiciono o produto simples "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15" ao carrinho
        When Clico no botão "Cart"
        Then O produto deve estar no carrinho

    Scenario: Adicionar produto com variação ao carrinho
        Given Adiciono o produto com variação "Acqua Di Gio Pour Homme" tamanho "3.4 oz" ao carrinho
        When Clico no botão "Cart"
        Then O produto deve estar no carrinho

    Scenario: Remover produto do carrinho
        Given Tenho o produto "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15" no carrinho
        When Clico no botão "Remove" do produto "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"
        Then Sou redirecionado para a tela com o texto "Your shopping cart is empty!"

    Scenario: Finalizar compra com sucesso
        Given Adiciono o produto "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15" no carrinho
        When Clico no botão "Confirm Order"
        Then Sou redirecionado para a tela com o texto "Your Order Has Been Processed!"
