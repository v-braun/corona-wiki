import yaml from 'yaml.macro'

// durchgehend offen
const __handel_0open = yaml('./rule_set_templates/__handel_0open.yml').__handel_0open;

// < 100 offen, > 100 geschlossen
const __handel_0open_100closed = yaml('./rule_set_templates/__handel_0open_100closed.yml').__handel_0open_100closed;

// < 50 offen, < 100 Terminshopping, > 100 geschlossen
const __handel_0open_50book_100closed = yaml('./rule_set_templates/__handel_0open_50book_100closed.yml').__handel_0open_50book_100closed;
// < 100 Terminshopping, > 100 geschlossen
const __handel_0book_100closed = yaml('./rule_set_templates/__handel_0book_100closed.yml').__handel_0book_100closed;


const __dienstleistung_0open_100closed = yaml('./rule_set_templates/__dienstleistung_0open_100closed.yml').__dienstleistung_0open_100closed;
const __dienstleistung_closed = yaml('./rule_set_templates/__dienstleistung_closed.yml').__dienstleistung_closed;


const __private_treffen = yaml('./rule_set_templates/__private_treffen.yml').__private_treffen;
const __kultur_0open_50book_100closed = yaml('./rule_set_templates/__kultur_0open_50book_100closed.yml').__kultur_0open_50book_100closed;


// state specific
const __rp_private_treffen = yaml('./rule_set_templates/__rp_private_treffen.yml').__rp_private_treffen;



const ruleSetTemplates = {
  __handel_0open,
  __handel_0open_100closed,
  __handel_0open_50book_100closed,

  __dienstleistung_0open_100closed,

  __dienstleistung_closed,

  __private_treffen,
  __kultur_0open_50book_100closed,

  __handel_0book_100closed,


// state specific
  __rp_private_treffen,

}

export default ruleSetTemplates;
