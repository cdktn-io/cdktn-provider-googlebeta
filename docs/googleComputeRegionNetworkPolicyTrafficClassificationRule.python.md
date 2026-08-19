# `googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule <a name="`googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRule <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule google_compute_region_network_policy_traffic_classification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  match: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch,
  network_policy: str,
  priority: typing.Union[int, float],
  action: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction = None,
  deletion_policy: str = None,
  description: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  region: str = None,
  rule_name: str = None,
  target_secure_tags: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.networkPolicy">network_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Denotes whether the network policy rule is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.region">region</a></code> | <code>str</code> | The location of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetSecureTags">target_secure_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]</code> | target_secure_tags block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#match GoogleComputeRegionNetworkPolicyTrafficClassificationRule#match}

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.networkPolicy"></a>

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#network_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#network_policy}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 1 and 2147482647.
The priority values from 2147482648 to 2147483647 (1000) are reserved for system default network policy rules.
Rules are evaluated from highest to lowest priority where 1 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#priority GoogleComputeRegionNetworkPolicyTrafficClassificationRule#priority}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#action GoogleComputeRegionNetworkPolicyTrafficClassificationRule#action}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#deletion_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#description GoogleComputeRegionNetworkPolicyTrafficClassificationRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Denotes whether the network policy rule is disabled.

When set to true, the network policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the network policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#disabled GoogleComputeRegionNetworkPolicyTrafficClassificationRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.region"></a>

- *Type:* str

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#region GoogleComputeRegionNetworkPolicyTrafficClassificationRule#region}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.ruleName"></a>

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#rule_name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#rule_name}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetSecureTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_secure_tags GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_secure_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_service_accounts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags">put_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags">reset_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts">reset_target_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction"></a>

```python
def put_action(
  dscp_mode: str = None,
  dscp_value: typing.Union[int, float] = None,
  traffic_class: str = None,
  type: str = None
) -> None
```

###### `dscp_mode`<sup>Optional</sup> <a name="dscp_mode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction.parameter.dscpMode"></a>

- *Type:* str

DSCP mode.

When set to AUTO, the DSCP value will be picked automatically based on selected trafficClass. Otherwise,dscpValue needs to be explicitly specified. Possible values: ["AUTO", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_mode GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_mode}

---

###### `dscp_value`<sup>Optional</sup> <a name="dscp_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction.parameter.dscpValue"></a>

- *Type:* typing.Union[int, float]

Custom DSCP value from 0-63 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_value GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_value}

---

###### `traffic_class`<sup>Optional</sup> <a name="traffic_class" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction.parameter.trafficClass"></a>

- *Type:* str

The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#traffic_class GoogleComputeRegionNetworkPolicyTrafficClassificationRule#traffic_class}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction.parameter.type"></a>

- *Type:* str

Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#type GoogleComputeRegionNetworkPolicyTrafficClassificationRule#type}

---

##### `put_match` <a name="put_match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch"></a>

```python
def put_match(
  layer4_configs: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs],
  dest_ip_ranges: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
) -> None
```

###### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch.parameter.layer4Configs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#layer4_configs GoogleComputeRegionNetworkPolicyTrafficClassificationRule#layer4_configs}

---

###### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch.parameter.destIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dest_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dest_ip_ranges}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#src_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#src_ip_ranges}

---

##### `put_target_secure_tags` <a name="put_target_secure_tags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags"></a>

```python
def put_target_secure_tags(
  value: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_target_secure_tags` <a name="reset_target_secure_tags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags"></a>

```python
def reset_target_secure_tags() -> None
```

##### `reset_target_service_accounts` <a name="reset_target_service_accounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts"></a>

```python
def reset_target_service_accounts() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionNetworkPolicyTrafficClassificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount">rule_tuple_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags">target_secure_tags</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput">action_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput">network_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput">target_secure_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput">target_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy">network_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action"></a>

```python
action: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match"></a>

```python
match: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a>

---

##### `rule_tuple_count`<sup>Required</sup> <a name="rule_tuple_count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount"></a>

```python
rule_tuple_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_secure_tags`<sup>Required</sup> <a name="target_secure_tags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags"></a>

```python
target_secure_tags: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput"></a>

```python
action_input: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput"></a>

```python
match_input: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---

##### `network_policy_input`<sup>Optional</sup> <a name="network_policy_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput"></a>

```python
network_policy_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `target_secure_tags_input`<sup>Optional</sup> <a name="target_secure_tags_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput"></a>

```python
target_secure_tags_input: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]

---

##### `target_service_accounts_input`<sup>Optional</sup> <a name="target_service_accounts_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput"></a>

```python
target_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `target_service_accounts`<sup>Required</sup> <a name="target_service_accounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction(
  dscp_mode: str = None,
  dscp_value: typing.Union[int, float] = None,
  traffic_class: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode">dscp_mode</a></code> | <code>str</code> | DSCP mode. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue">dscp_value</a></code> | <code>typing.Union[int, float]</code> | Custom DSCP value from 0-63 range. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass">traffic_class</a></code> | <code>str</code> | The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type">type</a></code> | <code>str</code> | Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"]. |

---

##### `dscp_mode`<sup>Optional</sup> <a name="dscp_mode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode"></a>

```python
dscp_mode: str
```

- *Type:* str

DSCP mode.

When set to AUTO, the DSCP value will be picked automatically based on selected trafficClass. Otherwise,dscpValue needs to be explicitly specified. Possible values: ["AUTO", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_mode GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_mode}

---

##### `dscp_value`<sup>Optional</sup> <a name="dscp_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue"></a>

```python
dscp_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Custom DSCP value from 0-63 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_value GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_value}

---

##### `traffic_class`<sup>Optional</sup> <a name="traffic_class" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass"></a>

```python
traffic_class: str
```

- *Type:* str

The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#traffic_class GoogleComputeRegionNetworkPolicyTrafficClassificationRule#traffic_class}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type"></a>

```python
type: str
```

- *Type:* str

Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#type GoogleComputeRegionNetworkPolicyTrafficClassificationRule#type}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  match: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch,
  network_policy: str,
  priority: typing.Union[int, float],
  action: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction = None,
  deletion_policy: str = None,
  description: str = None,
  disabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  region: str = None,
  rule_name: str = None,
  target_secure_tags: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy">network_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Denotes whether the network policy rule is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region">region</a></code> | <code>str</code> | The location of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags">target_secure_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]</code> | target_secure_tags block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match"></a>

```python
match: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#match GoogleComputeRegionNetworkPolicyTrafficClassificationRule#match}

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#network_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#network_policy}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 1 and 2147482647.
The priority values from 2147482648 to 2147483647 (1000) are reserved for system default network policy rules.
Rules are evaluated from highest to lowest priority where 1 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#priority GoogleComputeRegionNetworkPolicyTrafficClassificationRule#priority}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action"></a>

```python
action: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#action GoogleComputeRegionNetworkPolicyTrafficClassificationRule#action}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#deletion_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#description GoogleComputeRegionNetworkPolicyTrafficClassificationRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Denotes whether the network policy rule is disabled.

When set to true, the network policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the network policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#disabled GoogleComputeRegionNetworkPolicyTrafficClassificationRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#region GoogleComputeRegionNetworkPolicyTrafficClassificationRule#region}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#rule_name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#rule_name}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags"></a>

```python
target_secure_tags: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_secure_tags GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_secure_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_service_accounts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#timeouts}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch(
  layer4_configs: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs],
  dest_ip_ranges: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs">layer4_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]</code> | layer4_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs"></a>

```python
layer4_configs: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#layer4_configs GoogleComputeRegionNetworkPolicyTrafficClassificationRule#layer4_configs}

---

##### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dest_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dest_ip_ranges}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#src_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#src_ip_ranges}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs(
  ip_protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol type is required when creating a traffic classification rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ip_protocol GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ports GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ports}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#name}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode">reset_dscp_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue">reset_dscp_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass">reset_traffic_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dscp_mode` <a name="reset_dscp_mode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode"></a>

```python
def reset_dscp_mode() -> None
```

##### `reset_dscp_value` <a name="reset_dscp_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue"></a>

```python
def reset_dscp_value() -> None
```

##### `reset_traffic_class` <a name="reset_traffic_class" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass"></a>

```python
def reset_traffic_class() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput">dscp_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput">dscp_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput">traffic_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode">dscp_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue">dscp_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass">traffic_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dscp_mode_input`<sup>Optional</sup> <a name="dscp_mode_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput"></a>

```python
dscp_mode_input: str
```

- *Type:* str

---

##### `dscp_value_input`<sup>Optional</sup> <a name="dscp_value_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput"></a>

```python
dscp_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic_class_input`<sup>Optional</sup> <a name="traffic_class_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput"></a>

```python
traffic_class_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `dscp_mode`<sup>Required</sup> <a name="dscp_mode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode"></a>

```python
dscp_mode: str
```

- *Type:* str

---

##### `dscp_value`<sup>Required</sup> <a name="dscp_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue"></a>

```python
dscp_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic_class`<sup>Required</sup> <a name="traffic_class" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass"></a>

```python
traffic_class: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs">put_layer4_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges">reset_dest_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layer4_configs` <a name="put_layer4_configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs"></a>

```python
def put_layer4_configs(
  value: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]

---

##### `reset_dest_ip_ranges` <a name="reset_dest_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges"></a>

```python
def reset_dest_ip_ranges() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs">layer4_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput">dest_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput">layer4_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs"></a>

```python
layer4_configs: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a>

---

##### `dest_ip_ranges_input`<sup>Optional</sup> <a name="dest_ip_ranges_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput"></a>

```python
dest_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `layer4_configs_input`<sup>Optional</sup> <a name="layer4_configs_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```python
layer4_configs_input: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>]

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_region_network_policy_traffic_classification_rule

googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---



