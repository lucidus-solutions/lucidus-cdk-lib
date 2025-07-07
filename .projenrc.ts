import { awscdk } from 'projen';
import { TrailingComma } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  packageName: 'lucidus-cdk-lib',
  description: 'A library of reusable AWS CDK constructs for Lucidus Automation projects.',
  author: 'Lucidus Automation',
  authorAddress: 'automation@lucidus.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'lucidus-cdk-lib',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/colemandevries/lucidus-cdk-lib.git',
  eslint: true,
  prettier: true,
  vscode: true,
  majorVersion: 1,
  srcdir: 'src',
  testdir: 'test',
});

project.eslint?.addRules({
  'no-console': 'warn',
  'quotes': ['error', 'single'],
  'semi': ['error', 'always'],
  'indent': ['error', 2],
  'no-unused-vars': 'warn',
  'eqeqeq': 'error',
  'no-trailing-spaces': 'error',
  'eol-last': ['error', 'always'],
  'comma-dangle': ['error', 'only-multiline'],
});

project.prettier?.addOverride({
  files: '*.ts',
  options: {
    singleQuote: true,
    semi: false,
    tabWidth: 2,
    trailingComma: TrailingComma.ES5,
    printWidth: 80,
  },
});

project.package.addField('publishConfig', {
  access: 'public',
});

project.synth();