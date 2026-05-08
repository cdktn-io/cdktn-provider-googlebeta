# `googleNetworkSecurityUllMirroringCollectorRule` Submodule <a name="`googleNetworkSecurityUllMirroringCollectorRule` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRule <a name="GoogleNetworkSecurityUllMirroringCollectorRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule google_network_security_ull_mirroring_collector_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule(
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
  match: GoogleNetworkSecurityUllMirroringCollectorRuleMatch,
  ull_mirroring_collector: str,
  ull_mirroring_collector_rule_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollector">ull_mirroring_collector</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollectorRuleId">ull_mirroring_collector_rule_id</a></code> | <code>str</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#location GoogleNetworkSecurityUllMirroringCollectorRule#location}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#match GoogleNetworkSecurityUllMirroringCollectorRule#match}

---

##### `ull_mirroring_collector`<sup>Required</sup> <a name="ull_mirroring_collector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollector"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `ull_mirroring_collector_rule_id`<sup>Required</sup> <a name="ull_mirroring_collector_rule_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollectorRuleId"></a>

- *Type:* str

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#labels GoogleNetworkSecurityUllMirroringCollectorRule#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#timeouts GoogleNetworkSecurityUllMirroringCollectorRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_match` <a name="put_match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch"></a>

```python
def put_match(
  direction: str = None,
  dst_ip_ranges: typing.List[str] = None,
  ip_protocols: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch.parameter.direction"></a>

- *Type:* str

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#direction GoogleNetworkSecurityUllMirroringCollectorRule#direction}

---

###### `dst_ip_ranges`<sup>Optional</sup> <a name="dst_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch.parameter.dstIpRanges"></a>

- *Type:* typing.List[str]

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#dst_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

###### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch.parameter.ipProtocols"></a>

- *Type:* typing.List[str]

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ip_protocols GoogleNetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#src_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityUllMirroringCollectorRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityUllMirroringCollectorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUllMirroringCollectorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput">ull_mirroring_collector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput">ull_mirroring_collector_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector">ull_mirroring_collector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId">ull_mirroring_collector_rule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match"></a>

```python
match: GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput"></a>

```python
match_input: GoogleNetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `ull_mirroring_collector_input`<sup>Optional</sup> <a name="ull_mirroring_collector_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput"></a>

```python
ull_mirroring_collector_input: str
```

- *Type:* str

---

##### `ull_mirroring_collector_rule_id_input`<sup>Optional</sup> <a name="ull_mirroring_collector_rule_id_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput"></a>

```python
ull_mirroring_collector_rule_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ull_mirroring_collector`<sup>Required</sup> <a name="ull_mirroring_collector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector"></a>

```python
ull_mirroring_collector: str
```

- *Type:* str

---

##### `ull_mirroring_collector_rule_id`<sup>Required</sup> <a name="ull_mirroring_collector_rule_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId"></a>

```python
ull_mirroring_collector_rule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleConfig <a name="GoogleNetworkSecurityUllMirroringCollectorRuleConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  match: GoogleNetworkSecurityUllMirroringCollectorRuleMatch,
  ull_mirroring_collector: str,
  ull_mirroring_collector_rule_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector">ull_mirroring_collector</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId">ull_mirroring_collector_rule_id</a></code> | <code>str</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#location GoogleNetworkSecurityUllMirroringCollectorRule#location}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match"></a>

```python
match: GoogleNetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#match GoogleNetworkSecurityUllMirroringCollectorRule#match}

---

##### `ull_mirroring_collector`<sup>Required</sup> <a name="ull_mirroring_collector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector"></a>

```python
ull_mirroring_collector: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `ull_mirroring_collector_rule_id`<sup>Required</sup> <a name="ull_mirroring_collector_rule_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId"></a>

```python
ull_mirroring_collector_rule_id: str
```

- *Type:* str

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#labels GoogleNetworkSecurityUllMirroringCollectorRule#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#timeouts GoogleNetworkSecurityUllMirroringCollectorRule#timeouts}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleMatch <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch(
  direction: str = None,
  dst_ip_ranges: typing.List[str] = None,
  ip_protocols: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction">direction</a></code> | <code>str</code> | Direction of traffic to match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges">dst_ip_ranges</a></code> | <code>typing.List[str]</code> | Destination IP ranges to match. When unset, matches any destination IP range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | Source IP ranges to match. When unset, matches any source IP range. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#direction GoogleNetworkSecurityUllMirroringCollectorRule#direction}

---

##### `dst_ip_ranges`<sup>Optional</sup> <a name="dst_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges"></a>

```python
dst_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#dst_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

##### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ip_protocols GoogleNetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#src_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges">reset_dst_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols">reset_ip_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_dst_ip_ranges` <a name="reset_dst_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges"></a>

```python
def reset_dst_ip_ranges() -> None
```

##### `reset_ip_protocols` <a name="reset_ip_protocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols"></a>

```python
def reset_ip_protocols() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput">dst_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput">ip_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges">dst_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `dst_ip_ranges_input`<sup>Optional</sup> <a name="dst_ip_ranges_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput"></a>

```python
dst_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocols_input`<sup>Optional</sup> <a name="ip_protocols_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput"></a>

```python
ip_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `dst_ip_ranges`<sup>Required</sup> <a name="dst_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges"></a>

```python
dst_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocols`<sup>Required</sup> <a name="ip_protocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---


### GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector_rule

googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---



