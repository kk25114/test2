import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  gpt_3.5_turbo_0613 = 'gpt-3.5-turbo-0613',
  gpt_3.5_turbo_16k='gpt-3.5-turbo-16k',
  gpt_3.5_turbo_16k_0613='gpt-3.5-turbo-16k-0613',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.gpt_3.5_turbo_0613]: {
    id: OpenAIModelID.gpt_3.5_turbo_0613,
    name: 'gpt_3.5_turbo_0613',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.gpt_3.5_turbo_16k]: {
    id: OpenAIModelID.gpt_3.5_turbo_16k,
    name: 'gpt-3.5-turbo-16k (max 16,384 tokens)',
    maxLength: 48000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.gpt_3.5_turbo_16k_0613]: {
    id: OpenAIModelID.gpt_3.5_turbo_16k_0613,
    name: 'gpt-3.5-turbo-16k-0613 (max 16,384 tokens)',
    maxLength: 48000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
};
