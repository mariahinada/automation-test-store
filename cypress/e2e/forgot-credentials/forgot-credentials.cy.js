import { ForgotCredentialsService } from '../../support/forgot-credentials.service';
import { ForgotCredentialsExpectations } from '../../support/forgot-credentials.expectations';

describe('Recuperação de Credenciais no Automation Test Store', () => {
    const service = new ForgotCredentialsService();
    const expectation = new(ForgotCredentialsExpectations());
})