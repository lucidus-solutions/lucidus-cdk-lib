import { Domain } from 'aws-cdk-lib/aws-opensearchservice'
import { DomainProps } from 'aws-cdk-lib/aws-opensearchservice'
import { TLSSecurityPolicy } from 'aws-cdk-lib/aws-opensearchservice'
import { Construct } from 'constructs'

export class OpensearchDomain extends Domain {
  constructor(scope: Construct, id: string, props: DomainProps) {
    const presetProps: Partial<DomainProps> = {
      tlsSecurityPolicy: TLSSecurityPolicy.TLS_1_2, // Default TLS
      encryptionAtRest: { enabled: true }, // Default encryption at rest
      nodeToNodeEncryption: true, // Default node-to-node encryption
      enforceHttps: true, // Default HTTPS enforcement
    }

    const modifiedProps: DomainProps = {
      ...props,
      ...presetProps,
    }

    super(scope, id, modifiedProps)
  }
}
