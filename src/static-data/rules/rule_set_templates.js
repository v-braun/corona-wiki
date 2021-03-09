import yaml from 'yaml.macro'

const private_treffen = yaml('./rule_set_templates/private_treffen.yml').private_treffen;
const koerpernahe_dienstleistung = yaml('./rule_set_templates/koerpernahe_dienstleistung.yml').koerpernahe_dienstleistung;
const frisuer = yaml('./rule_set_templates/frisuer.yml').frisuer;
const handel_phase2 = yaml('./rule_set_templates/handel_phase2.yml').handel_phase2;
const handel_phase1 = yaml('./rule_set_templates/handel_phase1.yml').handel_phase1;
const kultur_phase3 = yaml('./rule_set_templates/kultur_phase3.yml').kultur_phase3;
const handel_phase3 = yaml('./rule_set_templates/handel_phase3.yml').handel_phase3;


const _ni_handel_phase3 = yaml('./rule_set_templates/_ni_handel_phase3.yml').handel_phase3;

const ruleSetTemplates = {
  private_treffen,
  koerpernahe_dienstleistung,
  frisuer,
  handel_phase1,
  handel_phase2,
  handel_phase3,
  kultur_phase3,

  // niedersachsen templates
  _ni_handel_phase3,
}

export default ruleSetTemplates;
