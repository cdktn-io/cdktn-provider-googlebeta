# `googleSecretManagerRegionalSecretManagedRotation` Submodule <a name="`googleSecretManagerRegionalSecretManagedRotation` Submodule" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecretManagedRotation <a name="GoogleSecretManagerRegionalSecretManagedRotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_sql_single_user_credentials: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials,
  location: str,
  secret_id: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleSecretManagerRegionalSecretManagedRotationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.cloudSqlSingleUserCredentials">cloud_sql_single_user_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_sql_single_user_credentials`<sup>Required</sup> <a name="cloud_sql_single_user_credentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.cloudSqlSingleUserCredentials"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials GoogleSecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.location"></a>

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#location GoogleSecretManagerRegionalSecretManagedRotation#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.secretId"></a>

- *Type:* str

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#secret_id GoogleSecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#timeouts GoogleSecretManagerRegionalSecretManagedRotation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials">put_cloud_sql_single_user_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_sql_single_user_credentials` <a name="put_cloud_sql_single_user_credentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials"></a>

```python
def put_cloud_sql_single_user_credentials(
  instance_id: str,
  username: str,
  password: str = None,
  password_wo: str = None,
  password_wo_version: str = None
) -> None
```

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.instanceId"></a>

- *Type:* str

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#instance_id GoogleSecretManagerRegionalSecretManagedRotation#instance_id}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.username"></a>

- *Type:* str

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#username GoogleSecretManagerRegionalSecretManagedRotation#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.password"></a>

- *Type:* str

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password GoogleSecretManagerRegionalSecretManagedRotation#password}

---

###### `password_wo`<sup>Optional</sup> <a name="password_wo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.passwordWo"></a>

- *Type:* str

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo GoogleSecretManagerRegionalSecretManagedRotation#password_wo}

---

###### `password_wo_version`<sup>Optional</sup> <a name="password_wo_version" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.passwordWoVersion"></a>

- *Type:* str

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo_version GoogleSecretManagerRegionalSecretManagedRotation#password_wo_version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#create GoogleSecretManagerRegionalSecretManagedRotation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#delete GoogleSecretManagerRegionalSecretManagedRotation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSecretManagerRegionalSecretManagedRotation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSecretManagerRegionalSecretManagedRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecretManagedRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials">cloud_sql_single_user_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList">GoogleSecretManagerRegionalSecretManagedRotationRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput">cloud_sql_single_user_credentials_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_sql_single_user_credentials`<sup>Required</sup> <a name="cloud_sql_single_user_credentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials"></a>

```python
cloud_sql_single_user_credentials: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.rotation"></a>

```python
rotation: GoogleSecretManagerRegionalSecretManagedRotationRotationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList">GoogleSecretManagerRegionalSecretManagedRotationRotationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeouts"></a>

```python
timeouts: GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a>

---

##### `cloud_sql_single_user_credentials_input`<sup>Optional</sup> <a name="cloud_sql_single_user_credentials_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput"></a>

```python
cloud_sql_single_user_credentials_input: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleSecretManagerRegionalSecretManagedRotationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials <a name="GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials(
  instance_id: str,
  username: str,
  password: str = None,
  password_wo: str = None,
  password_wo_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId">instance_id</a></code> | <code>str</code> | The name of the Cloud SQL instance. The instance must be in the same project as the regional secret. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username">username</a></code> | <code>str</code> | The username of the Cloud SQL database user. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password">password</a></code> | <code>str</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo">password_wo</a></code> | <code>str</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion">password_wo_version</a></code> | <code>str</code> | Triggers update of 'password_wo' write-only. |

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#instance_id GoogleSecretManagerRegionalSecretManagedRotation#instance_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#username GoogleSecretManagerRegionalSecretManagedRotation#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password GoogleSecretManagerRegionalSecretManagedRotation#password}

---

##### `password_wo`<sup>Optional</sup> <a name="password_wo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo"></a>

```python
password_wo: str
```

- *Type:* str

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo GoogleSecretManagerRegionalSecretManagedRotation#password_wo}

---

##### `password_wo_version`<sup>Optional</sup> <a name="password_wo_version" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion"></a>

```python
password_wo_version: str
```

- *Type:* str

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo_version GoogleSecretManagerRegionalSecretManagedRotation#password_wo_version}

---

### GoogleSecretManagerRegionalSecretManagedRotationConfig <a name="GoogleSecretManagerRegionalSecretManagedRotationConfig" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_sql_single_user_credentials: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials,
  location: str,
  secret_id: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleSecretManagerRegionalSecretManagedRotationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials">cloud_sql_single_user_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.secretId">secret_id</a></code> | <code>str</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_sql_single_user_credentials`<sup>Required</sup> <a name="cloud_sql_single_user_credentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials"></a>

```python
cloud_sql_single_user_credentials: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials GoogleSecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#location GoogleSecretManagerRegionalSecretManagedRotation#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#secret_id GoogleSecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.timeouts"></a>

```python
timeouts: GoogleSecretManagerRegionalSecretManagedRotationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#timeouts GoogleSecretManagerRegionalSecretManagedRotation#timeouts}

---

### GoogleSecretManagerRegionalSecretManagedRotationRotation <a name="GoogleSecretManagerRegionalSecretManagedRotationRotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation()
```


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus()
```


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError()
```


### GoogleSecretManagerRegionalSecretManagedRotationTimeouts <a name="GoogleSecretManagerRegionalSecretManagedRotationTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#create GoogleSecretManagerRegionalSecretManagedRotation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#delete GoogleSecretManagerRegionalSecretManagedRotation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#create GoogleSecretManagerRegionalSecretManagedRotation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#delete GoogleSecretManagerRegionalSecretManagedRotation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo">reset_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion">reset_password_wo_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_wo` <a name="reset_password_wo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo"></a>

```python
def reset_password_wo() -> None
```

##### `reset_password_wo_version` <a name="reset_password_wo_version" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion"></a>

```python
def reset_password_wo_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput">password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput">password_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo">password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion">password_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_wo_input`<sup>Optional</sup> <a name="password_wo_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput"></a>

```python
password_wo_input: str
```

- *Type:* str

---

##### `password_wo_version_input`<sup>Optional</sup> <a name="password_wo_version_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput"></a>

```python
password_wo_version_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### ~~`password_wo`~~<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
password_wo: str
```

- *Type:* str

---

##### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion"></a>

```python
password_wo_version: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error"></a>

```python
error: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus">managed_rotation_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation">GoogleSecretManagerRegionalSecretManagedRotationRotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_rotation_status`<sup>Required</sup> <a name="managed_rotation_status" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus"></a>

```python
managed_rotation_status: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecretManagerRegionalSecretManagedRotationRotation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation">GoogleSecretManagerRegionalSecretManagedRotationRotation</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secret_manager_regional_secret_managed_rotation

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleSecretManagerRegionalSecretManagedRotationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---



