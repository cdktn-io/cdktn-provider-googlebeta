# `googleFirebaseAiLogicConfig` Submodule <a name="`googleFirebaseAiLogicConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicConfig <a name="GoogleFirebaseAiLogicConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config google_firebase_ai_logic_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  generative_language_config: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig = None,
  id: str = None,
  location: str = None,
  project: str = None,
  telemetry_config: GoogleFirebaseAiLogicConfigTelemetryConfig = None,
  timeouts: GoogleFirebaseAiLogicConfigTimeouts = None,
  traffic_filter: GoogleFirebaseAiLogicConfigTrafficFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.generativeLanguageConfig">generative_language_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | generative_language_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.trafficFilter">traffic_filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | traffic_filter block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#deletion_policy GoogleFirebaseAiLogicConfig#deletion_policy}

---

##### `generative_language_config`<sup>Optional</sup> <a name="generative_language_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.generativeLanguageConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

generative_language_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#generative_language_config GoogleFirebaseAiLogicConfig#generative_language_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#location GoogleFirebaseAiLogicConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}.

---

##### `telemetry_config`<sup>Optional</sup> <a name="telemetry_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.telemetryConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#telemetry_config GoogleFirebaseAiLogicConfig#telemetry_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#timeouts GoogleFirebaseAiLogicConfig#timeouts}

---

##### `traffic_filter`<sup>Optional</sup> <a name="traffic_filter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.trafficFilter"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

traffic_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#traffic_filter GoogleFirebaseAiLogicConfig#traffic_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig">put_generative_language_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig">put_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter">put_traffic_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig">reset_generative_language_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig">reset_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter">reset_traffic_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_generative_language_config` <a name="put_generative_language_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig"></a>

```python
def put_generative_language_config(
  api_key: str = None,
  api_key_wo: str = None,
  api_key_wo_version: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig.parameter.apiKey"></a>

- *Type:* str

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#api_key GoogleFirebaseAiLogicConfig#api_key}

---

###### `api_key_wo`<sup>Optional</sup> <a name="api_key_wo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig.parameter.apiKeyWo"></a>

- *Type:* str

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#api_key_wo GoogleFirebaseAiLogicConfig#api_key_wo}

---

###### `api_key_wo_version`<sup>Optional</sup> <a name="api_key_wo_version" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig.parameter.apiKeyWoVersion"></a>

- *Type:* str

Triggers update of 'api_key_wo' write-only.

Increment this value when an update to 'api_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#api_key_wo_version GoogleFirebaseAiLogicConfig#api_key_wo_version}

---

##### `put_telemetry_config` <a name="put_telemetry_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig"></a>

```python
def put_telemetry_config(
  mode: str = None,
  sampling_rate: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig.parameter.mode"></a>

- *Type:* str

The current monitoring mode used for this project. Possible values: NONE ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#mode GoogleFirebaseAiLogicConfig#mode}

---

###### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig.parameter.samplingRate"></a>

- *Type:* typing.Union[int, float]

The percentage of requests to be sampled, expressed as a fraction in the range (0,1].

Note that the actual sampling rate may be lower than
the specified value if the system is overloaded. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#sampling_rate GoogleFirebaseAiLogicConfig#sampling_rate}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}.

---

##### `put_traffic_filter` <a name="put_traffic_filter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter"></a>

```python
def put_traffic_filter(
  template_only: bool | IResolvable = None
) -> None
```

###### `template_only`<sup>Optional</sup> <a name="template_only" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter.parameter.templateOnly"></a>

- *Type:* bool | cdktn.IResolvable

Only allows users to use AI Logic via prompt templates for this project.

If true, only calls using server templates are permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#template_only GoogleFirebaseAiLogicConfig#template_only}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_generative_language_config` <a name="reset_generative_language_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig"></a>

```python
def reset_generative_language_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_telemetry_config` <a name="reset_telemetry_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig"></a>

```python
def reset_telemetry_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_filter` <a name="reset_traffic_filter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter"></a>

```python
def reset_traffic_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseAiLogicConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseAiLogicConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig">generative_language_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter">traffic_filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput">generative_language_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput">telemetry_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput">traffic_filter_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `generative_language_config`<sup>Required</sup> <a name="generative_language_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig"></a>

```python
generative_language_config: GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `telemetry_config`<sup>Required</sup> <a name="telemetry_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig"></a>

```python
telemetry_config: GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAiLogicConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a>

---

##### `traffic_filter`<sup>Required</sup> <a name="traffic_filter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter"></a>

```python
traffic_filter: GoogleFirebaseAiLogicConfigTrafficFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `generative_language_config_input`<sup>Optional</sup> <a name="generative_language_config_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput"></a>

```python
generative_language_config_input: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `telemetry_config_input`<sup>Optional</sup> <a name="telemetry_config_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput"></a>

```python
telemetry_config_input: GoogleFirebaseAiLogicConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleFirebaseAiLogicConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---

##### `traffic_filter_input`<sup>Optional</sup> <a name="traffic_filter_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput"></a>

```python
traffic_filter_input: GoogleFirebaseAiLogicConfigTrafficFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicConfigConfig <a name="GoogleFirebaseAiLogicConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  generative_language_config: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig = None,
  id: str = None,
  location: str = None,
  project: str = None,
  telemetry_config: GoogleFirebaseAiLogicConfigTelemetryConfig = None,
  timeouts: GoogleFirebaseAiLogicConfigTimeouts = None,
  traffic_filter: GoogleFirebaseAiLogicConfigTrafficFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig">generative_language_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | generative_language_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter">traffic_filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | traffic_filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#deletion_policy GoogleFirebaseAiLogicConfig#deletion_policy}

---

##### `generative_language_config`<sup>Optional</sup> <a name="generative_language_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig"></a>

```python
generative_language_config: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

generative_language_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#generative_language_config GoogleFirebaseAiLogicConfig#generative_language_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#location GoogleFirebaseAiLogicConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}.

---

##### `telemetry_config`<sup>Optional</sup> <a name="telemetry_config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig"></a>

```python
telemetry_config: GoogleFirebaseAiLogicConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#telemetry_config GoogleFirebaseAiLogicConfig#telemetry_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAiLogicConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#timeouts GoogleFirebaseAiLogicConfig#timeouts}

---

##### `traffic_filter`<sup>Optional</sup> <a name="traffic_filter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter"></a>

```python
traffic_filter: GoogleFirebaseAiLogicConfigTrafficFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

traffic_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#traffic_filter GoogleFirebaseAiLogicConfig#traffic_filter}

---

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfig <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig(
  api_key: str = None,
  api_key_wo: str = None,
  api_key_wo_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey">api_key</a></code> | <code>str</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo">api_key_wo</a></code> | <code>str</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion">api_key_wo_version</a></code> | <code>str</code> | Triggers update of 'api_key_wo' write-only. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#api_key GoogleFirebaseAiLogicConfig#api_key}

---

##### `api_key_wo`<sup>Optional</sup> <a name="api_key_wo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo"></a>

```python
api_key_wo: str
```

- *Type:* str

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#api_key_wo GoogleFirebaseAiLogicConfig#api_key_wo}

---

##### `api_key_wo_version`<sup>Optional</sup> <a name="api_key_wo_version" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion"></a>

```python
api_key_wo_version: str
```

- *Type:* str

Triggers update of 'api_key_wo' write-only.

Increment this value when an update to 'api_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#api_key_wo_version GoogleFirebaseAiLogicConfig#api_key_wo_version}

---

### GoogleFirebaseAiLogicConfigTelemetryConfig <a name="GoogleFirebaseAiLogicConfigTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig(
  mode: str = None,
  sampling_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode">mode</a></code> | <code>str</code> | The current monitoring mode used for this project. Possible values: NONE ALL. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The percentage of requests to be sampled, expressed as a fraction in the range (0,1]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The current monitoring mode used for this project. Possible values: NONE ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#mode GoogleFirebaseAiLogicConfig#mode}

---

##### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of requests to be sampled, expressed as a fraction in the range (0,1].

Note that the actual sampling rate may be lower than
the specified value if the system is overloaded. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#sampling_rate GoogleFirebaseAiLogicConfig#sampling_rate}

---

### GoogleFirebaseAiLogicConfigTimeouts <a name="GoogleFirebaseAiLogicConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}.

---

### GoogleFirebaseAiLogicConfigTrafficFilter <a name="GoogleFirebaseAiLogicConfigTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter(
  template_only: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly">template_only</a></code> | <code>bool \| cdktn.IResolvable</code> | Only allows users to use AI Logic via prompt templates for this project. |

---

##### `template_only`<sup>Optional</sup> <a name="template_only" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly"></a>

```python
template_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Only allows users to use AI Logic via prompt templates for this project.

If true, only calls using server templates are permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_ai_logic_config#template_only GoogleFirebaseAiLogicConfig#template_only}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo">reset_api_key_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion">reset_api_key_wo_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_api_key_wo` <a name="reset_api_key_wo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo"></a>

```python
def reset_api_key_wo() -> None
```

##### `reset_api_key_wo_version` <a name="reset_api_key_wo_version" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion"></a>

```python
def reset_api_key_wo_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput">api_key_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput">api_key_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo">api_key_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion">api_key_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_key_wo_input`<sup>Optional</sup> <a name="api_key_wo_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput"></a>

```python
api_key_wo_input: str
```

- *Type:* str

---

##### `api_key_wo_version_input`<sup>Optional</sup> <a name="api_key_wo_version_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput"></a>

```python
api_key_wo_version_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_key_wo`<sup>Required</sup> <a name="api_key_wo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo"></a>

```python
api_key_wo: str
```

- *Type:* str

---

##### `api_key_wo_version`<sup>Required</sup> <a name="api_key_wo_version" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion"></a>

```python
api_key_wo_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---


### GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference <a name="GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate">reset_sampling_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_sampling_rate` <a name="reset_sampling_rate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate"></a>

```python
def reset_sampling_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput">sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `sampling_rate_input`<sup>Optional</sup> <a name="sampling_rate_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput"></a>

```python
sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseAiLogicConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---


### GoogleFirebaseAiLogicConfigTimeoutsOutputReference <a name="GoogleFirebaseAiLogicConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseAiLogicConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---


### GoogleFirebaseAiLogicConfigTrafficFilterOutputReference <a name="GoogleFirebaseAiLogicConfigTrafficFilterOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_ai_logic_config

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly">reset_template_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_template_only` <a name="reset_template_only" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly"></a>

```python
def reset_template_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput">template_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly">template_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_only_input`<sup>Optional</sup> <a name="template_only_input" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput"></a>

```python
template_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `template_only`<sup>Required</sup> <a name="template_only" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly"></a>

```python
template_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseAiLogicConfigTrafficFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---



