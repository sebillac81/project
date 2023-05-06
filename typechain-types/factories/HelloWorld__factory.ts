/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HelloWorld, HelloWorldInterface } from "../HelloWorld";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "helloWorld",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newText",
        type: "string",
      },
    ],
    name: "setText",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020017f48656c6c6f20576f726c64000000000000000000000000000000000000000000815250600090816200005891906200031a565b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000401565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012257607f821691505b602082108103620001385762000137620000da565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000163565b620001ae868362000163565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620001fb620001f5620001ef84620001c6565b620001d0565b620001c6565b9050919050565b6000819050919050565b6200021783620001da565b6200022f620002268262000202565b84845462000170565b825550505050565b600090565b6200024662000237565b620002538184846200020c565b505050565b5b818110156200027b576200026f6000826200023c565b60018101905062000259565b5050565b601f821115620002ca5762000294816200013e565b6200029f8462000153565b81016020851015620002af578190505b620002c7620002be8562000153565b83018262000258565b50505b505050565b600082821c905092915050565b6000620002ef60001984600802620002cf565b1980831691505092915050565b60006200030a8383620002dc565b9150826002028217905092915050565b6200032582620000a0565b67ffffffffffffffff811115620003415762000340620000ab565b5b6200034d825462000109565b6200035a8282856200027f565b600060209050601f8311600181146200039257600084156200037d578287015190505b620003898582620002fc565b865550620003f9565b601f198416620003a2866200013e565b60005b82811015620003cc57848901518255600182019150602085019450602081019050620003a5565b86831015620003ec5784890151620003e8601f891682620002dc565b8355505b6001600288020188555050505b505050505050565b6108dc80620004116000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635d3a1f9d146100515780638da5cb5b1461006d578063c605f76c1461008b578063f2fde38b146100a9575b600080fd5b61006b60048036038101906100669190610366565b6100c5565b005b61007561016b565b60405161008291906103f4565b60405180910390f35b610093610191565b6040516100a0919061049f565b60405180910390f35b6100c360048036038101906100be91906104ed565b610223565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610155576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014c90610566565b60405180910390fd5b8181600091826101669291906107d6565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080546101a0906105ef565b80601f01602080910402602001604051908101604052809291908181526020018280546101cc906105ef565b80156102195780601f106101ee57610100808354040283529160200191610219565b820191906000526020600020905b8154815290600101906020018083116101fc57829003601f168201915b5050505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102aa90610566565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261032657610325610301565b5b8235905067ffffffffffffffff81111561034357610342610306565b5b60208301915083600182028301111561035f5761035e61030b565b5b9250929050565b6000806020838503121561037d5761037c6102f7565b5b600083013567ffffffffffffffff81111561039b5761039a6102fc565b5b6103a785828601610310565b92509250509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103de826103b3565b9050919050565b6103ee816103d3565b82525050565b600060208201905061040960008301846103e5565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561044957808201518184015260208101905061042e565b60008484015250505050565b6000601f19601f8301169050919050565b60006104718261040f565b61047b818561041a565b935061048b81856020860161042b565b61049481610455565b840191505092915050565b600060208201905081810360008301526104b98184610466565b905092915050565b6104ca816103d3565b81146104d557600080fd5b50565b6000813590506104e7816104c1565b92915050565b600060208284031215610503576105026102f7565b5b6000610511848285016104d8565b91505092915050565b7f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000600082015250565b600061055060178361041a565b915061055b8261051a565b602082019050919050565b6000602082019050818103600083015261057f81610543565b9050919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061060757607f821691505b60208210810361061a576106196105c0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610645565b61068c8683610645565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006106d36106ce6106c9846106a4565b6106ae565b6106a4565b9050919050565b6000819050919050565b6106ed836106b8565b6107016106f9826106da565b848454610652565b825550505050565b600090565b610716610709565b6107218184846106e4565b505050565b5b818110156107455761073a60008261070e565b600181019050610727565b5050565b601f82111561078a5761075b81610620565b61076484610635565b81016020851015610773578190505b61078761077f85610635565b830182610726565b50505b505050565b600082821c905092915050565b60006107ad6000198460080261078f565b1980831691505092915050565b60006107c6838361079c565b9150826002028217905092915050565b6107e08383610586565b67ffffffffffffffff8111156107f9576107f8610591565b5b61080382546105ef565b61080e828285610749565b6000601f83116001811461083d576000841561082b578287013590505b61083585826107ba565b86555061089d565b601f19841661084b86610620565b60005b828110156108735784890135825560018201915060208501945060208101905061084e565b86831015610890578489013561088c601f89168261079c565b8355505b6001600288020188555050505b5050505050505056fea26469706673582212207320a0b6ef44151c3187ba67bd5551641029ea53cbe6c96e473748f67247a47664736f6c63430008120033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorld> {
    return super.deploy(overrides || {}) as Promise<HelloWorld>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  override connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}
