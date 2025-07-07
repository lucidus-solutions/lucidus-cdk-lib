import { App, Stack } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { OpensearchDomain } from '../../../src/awscdk/opensearch'
import { EngineVersion } from 'aws-cdk-lib/aws-opensearchservice'

describe('OpensearchDomain', () => {
  let app: App
  let stack: Stack

  beforeEach(() => {
    app = new App()
    stack = new Stack(app, 'TestStack')
  })

  test('should create Opensearch domain with default security settings', () => {
    const domain = new OpensearchDomain(stack, 'TestDomain', {
      domainName: 'test-domain',
      version: EngineVersion.OPENSEARCH_1_0,
    })

    const template = Template.fromStack(stack)

    template.hasResourceProperties('AWS::OpenSearchService::Domain', {
      DomainName: 'test-domain',
      EngineVersion: 'OpenSearch_1.0',
      EncryptionAtRestOptions: { Enabled: true },
      NodeToNodeEncryptionOptions: { Enabled: true },
      TLSSecurityPolicy: 'TLS_1_2',
      EnforceHttps: true,
    })
  })
})
