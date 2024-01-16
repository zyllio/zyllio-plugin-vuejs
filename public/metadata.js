const Icon = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="#cccccc">    
  <path d="M13 7V9H15V17H17V7H13M11 13H9V15H7V13H5V11H7V9H9V11H11V13Z" />
</svg>
`;

export const CounterMetadata = {
  metadataVersion: 2,
  id: 'plugin-counter',
  icon: '',
  label: 'Counter',
  category: 'Components',
  subCategory: 'Input Fields',
  properties: [{
    id: 'count',
    name: 'Variable',
    type: 'number',
    tootip: ``,
    default: '',
    main: true,
    write: true
  }, {
    id: 'text',
    name: 'Text',
    type: 'text',
    tootip: ``,
    default: ''
  }],
  styles: [
  ]
}