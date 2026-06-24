# `googleContactCenterInsightsAutoLabelingRule` Submodule <a name="`googleContactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAutoLabelingRule <a name="GoogleContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  active: bool | IResolvable = None,
  auto_labeling_rule_id: str = None,
  conditions: IResolvable | typing.List[GoogleContactCenterInsightsAutoLabelingRuleConditions] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  label_key: str = None,
  label_key_type: str = None,
  project: str = None,
  timeouts: GoogleContactCenterInsightsAutoLabelingRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId">auto_labeling_rule_id</a></code> | <code>str</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey">label_key</a></code> | <code>str</code> | The label key. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType">label_key_type</a></code> | <code>str</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#location GoogleContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#active GoogleContactCenterInsightsAutoLabelingRule#active}

---

##### `auto_labeling_rule_id`<sup>Optional</sup> <a name="auto_labeling_rule_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId"></a>

- *Type:* str

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#auto_labeling_rule_id GoogleContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#conditions GoogleContactCenterInsightsAutoLabelingRule#conditions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#deletion_policy GoogleContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#description GoogleContactCenterInsightsAutoLabelingRule#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName"></a>

- *Type:* str

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#display_name GoogleContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label_key`<sup>Optional</sup> <a name="label_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey"></a>

- *Type:* str

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key GoogleContactCenterInsightsAutoLabelingRule#label_key}

---

##### `label_key_type`<sup>Optional</sup> <a name="label_key_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType"></a>

- *Type:* str

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key_type GoogleContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#timeouts GoogleContactCenterInsightsAutoLabelingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">reset_auto_labeling_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKey">reset_label_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKeyType">reset_label_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[GoogleContactCenterInsightsAutoLabelingRuleConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#create GoogleContactCenterInsightsAutoLabelingRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#delete GoogleContactCenterInsightsAutoLabelingRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#update GoogleContactCenterInsightsAutoLabelingRule#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_auto_labeling_rule_id` <a name="reset_auto_labeling_rule_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```python
def reset_auto_labeling_rule_id() -> None
```

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label_key` <a name="reset_label_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```python
def reset_label_key() -> None
```

##### `reset_label_key_type` <a name="reset_label_key_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```python
def reset_label_key_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContactCenterInsightsAutoLabelingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList">GoogleContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">auto_labeling_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyInput">label_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">label_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">auto_labeling_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKey">label_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyType">label_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```python
conditions: GoogleContactCenterInsightsAutoLabelingRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList">GoogleContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_labeling_rule_id_input`<sup>Optional</sup> <a name="auto_labeling_rule_id_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```python
auto_labeling_rule_id_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[GoogleContactCenterInsightsAutoLabelingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_key_input`<sup>Optional</sup> <a name="label_key_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```python
label_key_input: str
```

- *Type:* str

---

##### `label_key_type_input`<sup>Optional</sup> <a name="label_key_type_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```python
label_key_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_labeling_rule_id`<sup>Required</sup> <a name="auto_labeling_rule_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```python
auto_labeling_rule_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label_key`<sup>Required</sup> <a name="label_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```python
label_key: str
```

- *Type:* str

---

##### `label_key_type`<sup>Required</sup> <a name="label_key_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```python
label_key_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAutoLabelingRuleConditions <a name="GoogleContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions(
  condition: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.condition">condition</a></code> | <code>str</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.value">value</a></code> | <code>str</code> | CEL expression to be evaluated as the value. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```python
condition: str
```

- *Type:* str

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#condition GoogleContactCenterInsightsAutoLabelingRule#condition}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```python
value: str
```

- *Type:* str

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#value GoogleContactCenterInsightsAutoLabelingRule#value}

---

### GoogleContactCenterInsightsAutoLabelingRuleConfig <a name="GoogleContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  active: bool | IResolvable = None,
  auto_labeling_rule_id: str = None,
  conditions: IResolvable | typing.List[GoogleContactCenterInsightsAutoLabelingRuleConditions] = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  label_key: str = None,
  label_key_type: str = None,
  project: str = None,
  timeouts: GoogleContactCenterInsightsAutoLabelingRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">auto_labeling_rule_id</a></code> | <code>str</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.displayName">display_name</a></code> | <code>str</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">label_key</a></code> | <code>str</code> | The label key. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">label_key_type</a></code> | <code>str</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#location GoogleContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#active GoogleContactCenterInsightsAutoLabelingRule#active}

---

##### `auto_labeling_rule_id`<sup>Optional</sup> <a name="auto_labeling_rule_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```python
auto_labeling_rule_id: str
```

- *Type:* str

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#auto_labeling_rule_id GoogleContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[GoogleContactCenterInsightsAutoLabelingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#conditions GoogleContactCenterInsightsAutoLabelingRule#conditions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#deletion_policy GoogleContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#description GoogleContactCenterInsightsAutoLabelingRule#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#display_name GoogleContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label_key`<sup>Optional</sup> <a name="label_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```python
label_key: str
```

- *Type:* str

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key GoogleContactCenterInsightsAutoLabelingRule#label_key}

---

##### `label_key_type`<sup>Optional</sup> <a name="label_key_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```python
label_key_type: str
```

- *Type:* str

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key_type GoogleContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsAutoLabelingRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#timeouts GoogleContactCenterInsightsAutoLabelingRule#timeouts}

---

### GoogleContactCenterInsightsAutoLabelingRuleTimeouts <a name="GoogleContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#create GoogleContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#delete GoogleContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#update GoogleContactCenterInsightsAutoLabelingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#create GoogleContactCenterInsightsAutoLabelingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#delete GoogleContactCenterInsightsAutoLabelingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_auto_labeling_rule#update GoogleContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAutoLabelingRuleConditionsList <a name="GoogleContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleContactCenterInsightsAutoLabelingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>]

---


### GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>

---


### GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_auto_labeling_rule

googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleContactCenterInsightsAutoLabelingRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---



