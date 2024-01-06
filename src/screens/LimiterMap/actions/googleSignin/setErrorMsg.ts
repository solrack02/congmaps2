// ----------- set Error Message
export const setErrorMsg = (err: any) => {
  // ----------- set Local Types
  type TmsgItems = typeof msgItems;
  type Tmsg = keyof TmsgItems;

  // ----------- set Errors Selector
  const msg: Tmsg = err.message;
  const msgItems = {
    'Account problem.': 'Você não tem permissão de acesso.',
    'Password Incorrect.':
      'Sua senha está incorreta. Certifique-se de que o tab não esteja ativo.',
  };

  // ----------- set Return
  const msgDefault = 'Erro não identificado.';
  const msgSel = msgItems[msg];
  const condSel = msgSel ?? msgDefault;
  return condSel;
};
