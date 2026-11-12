# `googleDataflowConfigStoreSetting` Submodule <a name="`googleDataflowConfigStoreSetting` Submodule" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowConfigStoreSetting <a name="GoogleDataflowConfigStoreSetting" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting google_dataflow_config_store_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config_store_setting_id: str,
  location: str,
  parent: str,
  value: GoogleDataflowConfigStoreSettingValue,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleDataflowConfigStoreSettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.configStoreSettingId">config_store_setting_id</a></code> | <code>str</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.location">location</a></code> | <code>str</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.value">value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_store_setting_id`<sup>Required</sup> <a name="config_store_setting_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.configStoreSettingId"></a>

- *Type:* str

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#config_store_setting_id GoogleDataflowConfigStoreSetting#config_store_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.location"></a>

- *Type:* str

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#location GoogleDataflowConfigStoreSetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#parent GoogleDataflowConfigStoreSetting#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#value GoogleDataflowConfigStoreSetting#value}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#deletion_policy GoogleDataflowConfigStoreSetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#timeouts GoogleDataflowConfigStoreSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#create GoogleDataflowConfigStoreSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#delete GoogleDataflowConfigStoreSetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#update GoogleDataflowConfigStoreSetting#update}.

---

##### `put_value` <a name="put_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue"></a>

```python
def put_value(
  bool_value: bool | IResolvable = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue.parameter.boolValue"></a>

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#bool_value GoogleDataflowConfigStoreSetting#bool_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue.parameter.stringValue"></a>

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#string_value GoogleDataflowConfigStoreSetting#string_value}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataflowConfigStoreSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataflowConfigStoreSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataflowConfigStoreSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference">GoogleDataflowConfigStoreSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.value">value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference">GoogleDataflowConfigStoreSettingValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingIdInput">config_store_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.valueInput">value_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingId">config_store_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeouts"></a>

```python
timeouts: GoogleDataflowConfigStoreSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference">GoogleDataflowConfigStoreSettingTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.value"></a>

```python
value: GoogleDataflowConfigStoreSettingValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference">GoogleDataflowConfigStoreSettingValueOutputReference</a>

---

##### `config_store_setting_id_input`<sup>Optional</sup> <a name="config_store_setting_id_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingIdInput"></a>

```python
config_store_setting_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDataflowConfigStoreSettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.valueInput"></a>

```python
value_input: GoogleDataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---

##### `config_store_setting_id`<sup>Required</sup> <a name="config_store_setting_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingId"></a>

```python
config_store_setting_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowConfigStoreSettingConfig <a name="GoogleDataflowConfigStoreSettingConfig" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config_store_setting_id: str,
  location: str,
  parent: str,
  value: GoogleDataflowConfigStoreSettingValue,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleDataflowConfigStoreSettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.configStoreSettingId">config_store_setting_id</a></code> | <code>str</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.location">location</a></code> | <code>str</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.value">value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_store_setting_id`<sup>Required</sup> <a name="config_store_setting_id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.configStoreSettingId"></a>

```python
config_store_setting_id: str
```

- *Type:* str

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#config_store_setting_id GoogleDataflowConfigStoreSetting#config_store_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#location GoogleDataflowConfigStoreSetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#parent GoogleDataflowConfigStoreSetting#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.value"></a>

```python
value: GoogleDataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#value GoogleDataflowConfigStoreSetting#value}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#deletion_policy GoogleDataflowConfigStoreSetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.timeouts"></a>

```python
timeouts: GoogleDataflowConfigStoreSettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#timeouts GoogleDataflowConfigStoreSetting#timeouts}

---

### GoogleDataflowConfigStoreSettingTimeouts <a name="GoogleDataflowConfigStoreSettingTimeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#create GoogleDataflowConfigStoreSetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#delete GoogleDataflowConfigStoreSetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#update GoogleDataflowConfigStoreSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#create GoogleDataflowConfigStoreSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#delete GoogleDataflowConfigStoreSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#update GoogleDataflowConfigStoreSetting#update}.

---

### GoogleDataflowConfigStoreSettingValue <a name="GoogleDataflowConfigStoreSettingValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue(
  bool_value: bool | IResolvable = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.stringValue">string_value</a></code> | <code>str</code> | Represents a string value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#bool_value GoogleDataflowConfigStoreSetting#bool_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#string_value GoogleDataflowConfigStoreSetting#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataflowConfigStoreSettingTimeoutsOutputReference <a name="GoogleDataflowConfigStoreSettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataflowConfigStoreSettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

---


### GoogleDataflowConfigStoreSettingValueOutputReference <a name="GoogleDataflowConfigStoreSettingValueOutputReference" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataflow_config_store_setting

googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---



