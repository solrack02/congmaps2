import { TinfoStl, Tmask } from '#common/Components/Forms/IptTxt/types';
import { TscRoute } from '@morfos/routes';
import { TextStyle, ViewStyle } from 'react-native';

/**
 * Configurações para as colunas do AutoList
 *
 * @param screen - Texto que indica qual tela mostrar no SideRight
 * @param label - Texto Mostrado no título da coluna
 * @param varName - Nome da variável q será 'puxada' do objeto para exibir na coluna
 * @param colType - Use 'image' p/ mostra Thumbnail ao lado do name ou 'action' p/ mostrar botões a partir de um array
 * @param colStyles - Use para definir tamanho e espaçamento da coluna
 * @param formString - Exemplo: b1FormStr (Do arquivo paths em cada pasta de tela),
 * @param listStr - Exemplo: b1ListStr (Do arquivo paths em cada pasta de tela),
 * @param functionList - Exemplo: b1List (Do arquivo paths em cada pasta de tela)
 */

export type Tcol = {
  field: string;
  type: 'text' | 'img' | 'picker' | 'check' | 'dynamic';

  label?: string;
  pHolder?: string;
  maskType?: Tmask;
  lines?: number;

  pickerList?: object[];
  comp?: React.FC<any>;

  infoStl?: TinfoStl | TextStyle | ViewStyle;
}[];

export type TconfigList = {
  fields: Tcol;
  editable: boolean;
  paths: {
    formStr: string;
    listStr: string;
  };
  functions: {
    addItem: Function;
    updItem: Function;
    functionForm: Function;
    functionList: Function;
  };
};
