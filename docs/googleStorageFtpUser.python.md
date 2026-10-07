# `googleStorageFtpUser` Submodule <a name="`googleStorageFtpUser` Submodule" id="@cdktn/provider-google-beta.googleStorageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageFtpUser <a name="GoogleStorageFtpUser" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer_service_account: str,
  location: str,
  server_id: str,
  user_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  storage_directory_mappings: IResolvable | typing.List[GoogleStorageFtpUserStorageDirectoryMappings] = None,
  timeouts: GoogleStorageFtpUserTimeouts = None,
  user_credentials: IResolvable | typing.List[GoogleStorageFtpUserUserCredentials] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.customerServiceAccount">customer_service_account</a></code> | <code>str</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.storageDirectoryMappings">storage_directory_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.userCredentials">user_credentials</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]</code> | user_credentials block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_service_account`<sup>Required</sup> <a name="customer_service_account" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.customerServiceAccount"></a>

- *Type:* str

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#customer_service_account GoogleStorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.location"></a>

- *Type:* str

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#location GoogleStorageFtpUser#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.serverId"></a>

- *Type:* str

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#server_id GoogleStorageFtpUser#server_id}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.userId"></a>

- *Type:* str

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_id GoogleStorageFtpUser#user_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#deletion_policy GoogleStorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#labels GoogleStorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}.

---

##### `storage_directory_mappings`<sup>Optional</sup> <a name="storage_directory_mappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.storageDirectoryMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#storage_directory_mappings GoogleStorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#timeouts GoogleStorageFtpUser#timeouts}

---

##### `user_credentials`<sup>Optional</sup> <a name="user_credentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.Initializer.parameter.userCredentials"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_credentials GoogleStorageFtpUser#user_credentials}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings">put_storage_directory_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials">put_user_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetStorageDirectoryMappings">reset_storage_directory_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetUserCredentials">reset_user_credentials</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_storage_directory_mappings` <a name="put_storage_directory_mappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings"></a>

```python
def put_storage_directory_mappings(
  value: IResolvable | typing.List[GoogleStorageFtpUserStorageDirectoryMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#create GoogleStorageFtpUser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#delete GoogleStorageFtpUser#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#update GoogleStorageFtpUser#update}.

---

##### `put_user_credentials` <a name="put_user_credentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials"></a>

```python
def put_user_credentials(
  value: IResolvable | typing.List[GoogleStorageFtpUserUserCredentials]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_storage_directory_mappings` <a name="reset_storage_directory_mappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetStorageDirectoryMappings"></a>

```python
def reset_storage_directory_mappings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_credentials` <a name="reset_user_credentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.resetUserCredentials"></a>

```python
def reset_user_credentials() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleStorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleStorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageFtpUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappings">storage_directory_mappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList">GoogleStorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference">GoogleStorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentials">user_credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList">GoogleStorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccountInput">customer_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappingsInput">storage_directory_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentialsInput">user_credentials_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccount">customer_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_directory_mappings`<sup>Required</sup> <a name="storage_directory_mappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappings"></a>

```python
storage_directory_mappings: GoogleStorageFtpUserStorageDirectoryMappingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList">GoogleStorageFtpUserStorageDirectoryMappingsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeouts"></a>

```python
timeouts: GoogleStorageFtpUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference">GoogleStorageFtpUserTimeoutsOutputReference</a>

---

##### `user_credentials`<sup>Required</sup> <a name="user_credentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentials"></a>

```python
user_credentials: GoogleStorageFtpUserUserCredentialsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList">GoogleStorageFtpUserUserCredentialsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `customer_service_account_input`<sup>Optional</sup> <a name="customer_service_account_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccountInput"></a>

```python
customer_service_account_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `storage_directory_mappings_input`<sup>Optional</sup> <a name="storage_directory_mappings_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.storageDirectoryMappingsInput"></a>

```python
storage_directory_mappings_input: IResolvable | typing.List[GoogleStorageFtpUserStorageDirectoryMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleStorageFtpUserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---

##### `user_credentials_input`<sup>Optional</sup> <a name="user_credentials_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userCredentialsInput"></a>

```python
user_credentials_input: IResolvable | typing.List[GoogleStorageFtpUserUserCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `customer_service_account`<sup>Required</sup> <a name="customer_service_account" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.customerServiceAccount"></a>

```python
customer_service_account: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageFtpUserConfig <a name="GoogleStorageFtpUserConfig" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer_service_account: str,
  location: str,
  server_id: str,
  user_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  storage_directory_mappings: IResolvable | typing.List[GoogleStorageFtpUserStorageDirectoryMappings] = None,
  timeouts: GoogleStorageFtpUserTimeouts = None,
  user_credentials: IResolvable | typing.List[GoogleStorageFtpUserUserCredentials] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.customerServiceAccount">customer_service_account</a></code> | <code>str</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.serverId">server_id</a></code> | <code>str</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userId">user_id</a></code> | <code>str</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.storageDirectoryMappings">storage_directory_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userCredentials">user_credentials</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]</code> | user_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_service_account`<sup>Required</sup> <a name="customer_service_account" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.customerServiceAccount"></a>

```python
customer_service_account: str
```

- *Type:* str

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#customer_service_account GoogleStorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#location GoogleStorageFtpUser#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#server_id GoogleStorageFtpUser#server_id}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_id GoogleStorageFtpUser#user_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#deletion_policy GoogleStorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#id GoogleStorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#labels GoogleStorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#project GoogleStorageFtpUser#project}.

---

##### `storage_directory_mappings`<sup>Optional</sup> <a name="storage_directory_mappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.storageDirectoryMappings"></a>

```python
storage_directory_mappings: IResolvable | typing.List[GoogleStorageFtpUserStorageDirectoryMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#storage_directory_mappings GoogleStorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageFtpUserTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#timeouts GoogleStorageFtpUser#timeouts}

---

##### `user_credentials`<sup>Optional</sup> <a name="user_credentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserConfig.property.userCredentials"></a>

```python
user_credentials: IResolvable | typing.List[GoogleStorageFtpUserUserCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#user_credentials GoogleStorageFtpUser#user_credentials}

---

### GoogleStorageFtpUserStorageDirectoryMappings <a name="GoogleStorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings(
  bucket: str = None,
  bucket_prefix: str = None,
  directory: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucket">bucket</a></code> | <code>str</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.directory">directory</a></code> | <code>str</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.permission">permission</a></code> | <code>str</code> | The access level for the directory. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#bucket GoogleStorageFtpUser#bucket}

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#bucket_prefix GoogleStorageFtpUser#bucket_prefix}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.directory"></a>

```python
directory: str
```

- *Type:* str

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#directory GoogleStorageFtpUser#directory}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings.property.permission"></a>

```python
permission: str
```

- *Type:* str

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#permission GoogleStorageFtpUser#permission}

---

### GoogleStorageFtpUserTimeouts <a name="GoogleStorageFtpUserTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#create GoogleStorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#delete GoogleStorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#update GoogleStorageFtpUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#create GoogleStorageFtpUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#delete GoogleStorageFtpUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#update GoogleStorageFtpUser#update}.

---

### GoogleStorageFtpUserUserCredentials <a name="GoogleStorageFtpUserUserCredentials" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserUserCredentials(
  credential_name: str = None,
  credential_type: str = None,
  ssh_public_key_body: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialName">credential_name</a></code> | <code>str</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialType">credential_type</a></code> | <code>str</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.sshPublicKeyBody">ssh_public_key_body</a></code> | <code>str</code> | The SSH public key body. |

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#credential_name GoogleStorageFtpUser#credential_name}

---

##### `credential_type`<sup>Optional</sup> <a name="credential_type" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#credential_type GoogleStorageFtpUser#credential_type}

---

##### `ssh_public_key_body`<sup>Optional</sup> <a name="ssh_public_key_body" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```python
ssh_public_key_body: str
```

- *Type:* str

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_user#ssh_public_key_body GoogleStorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageFtpUserStorageDirectoryMappingsList <a name="GoogleStorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageFtpUserStorageDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleStorageFtpUserStorageDirectoryMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>]

---


### GoogleStorageFtpUserStorageDirectoryMappingsOutputReference <a name="GoogleStorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageFtpUserStorageDirectoryMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserStorageDirectoryMappings">GoogleStorageFtpUserStorageDirectoryMappings</a>

---


### GoogleStorageFtpUserTimeoutsOutputReference <a name="GoogleStorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageFtpUserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserTimeouts">GoogleStorageFtpUserTimeouts</a>

---


### GoogleStorageFtpUserUserCredentialsList <a name="GoogleStorageFtpUserUserCredentialsList" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageFtpUserUserCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleStorageFtpUserUserCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>]

---


### GoogleStorageFtpUserUserCredentialsOutputReference <a name="GoogleStorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_user

googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialName">reset_credential_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialType">reset_credential_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">reset_ssh_public_key_body</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_name` <a name="reset_credential_name" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```

##### `reset_credential_type` <a name="reset_credential_type" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```python
def reset_credential_type() -> None
```

##### `reset_ssh_public_key_body` <a name="reset_ssh_public_key_body" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```python
def reset_ssh_public_key_body() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">ssh_public_key_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">ssh_public_key_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `ssh_public_key_body_input`<sup>Optional</sup> <a name="ssh_public_key_body_input" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```python
ssh_public_key_body_input: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `ssh_public_key_body`<sup>Required</sup> <a name="ssh_public_key_body" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```python
ssh_public_key_body: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageFtpUserUserCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpUser.GoogleStorageFtpUserUserCredentials">GoogleStorageFtpUserUserCredentials</a>

---



