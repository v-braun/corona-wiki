import yaml from 'yaml.macro'

const private_treffen = yaml('./rule_set_templates/private_treffen.yml').private_treffen;

const ruleSetTemplates = {
  private_treffen: private_treffen
}
export default ruleSetTemplates;