import { AUTOCOMPLETE_OFF, DynamicFormControlLayout, serializable } from '@ng-dynamic-forms/core';
import { DsDynamicInputModel, DsDynamicInputModelConfig } from '../ds-dynamic-input.model';

export const DYNAMIC_FORM_CONTROL_TYPE_TYPEAHEAD = 'TYPEAHEAD';

export interface DsDynamicTypeaheadModelConfig extends DsDynamicInputModelConfig {
  minChars?: number;
  value?: any;
}

export class DynamicTypeaheadModel extends DsDynamicInputModel {

  @serializable() minChars: number;
  @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_TYPEAHEAD;

  constructor(config: DsDynamicTypeaheadModelConfig, layout?: DynamicFormControlLayout) {

    super(config, layout);

    this.autoComplete = AUTOCOMPLETE_OFF;
    this.minChars = config.minChars || 3;
  }

}
