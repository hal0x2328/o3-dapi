import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface DeployInput {
  code: string;
  name?: string;
  version?: string;
  author?: string;
  email?: string;
  description?: string;
  needStorage?: boolean;
  gasPrice?: number;
  gasLimit?: number;
  network: string;
}

export function deploy(data: DeployInput): Promise<void> {
  return sendMessage({
    command: Command.deploy,
    data,
  });
}
