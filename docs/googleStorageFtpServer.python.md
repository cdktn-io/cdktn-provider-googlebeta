# `googleStorageFtpServer` Submodule <a name="`googleStorageFtpServer` Submodule" id="@cdktn/provider-google-beta.googleStorageFtpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageFtpServer <a name="GoogleStorageFtpServer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server google_storage_ftp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_type: str,
  location: str,
  server_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  external_config: GoogleStorageFtpServerExternalConfig = None,
  id: str = None,
  internal_config: GoogleStorageFtpServerInternalConfig = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleStorageFtpServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.externalConfig">external_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#id GoogleStorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.internalConfig">internal_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.accessType"></a>

- *Type:* str

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#access_type GoogleStorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.location"></a>

- *Type:* str

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#location GoogleStorageFtpServer#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.serverId"></a>

- *Type:* str

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#server_id GoogleStorageFtpServer#server_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#deletion_policy GoogleStorageFtpServer#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.displayName"></a>

- *Type:* str

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#display_name GoogleStorageFtpServer#display_name}

---

##### `external_config`<sup>Optional</sup> <a name="external_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.externalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#external_config GoogleStorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#id GoogleStorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_config`<sup>Optional</sup> <a name="internal_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.internalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#internal_config GoogleStorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#labels GoogleStorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#timeouts GoogleStorageFtpServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putExternalConfig">put_external_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putInternalConfig">put_internal_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetExternalConfig">reset_external_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetInternalConfig">reset_internal_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_config` <a name="put_external_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putExternalConfig"></a>

```python
def put_external_config(
  allowed_cidr_blocks: typing.List[str] = None
) -> None
```

###### `allowed_cidr_blocks`<sup>Optional</sup> <a name="allowed_cidr_blocks" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putExternalConfig.parameter.allowedCidrBlocks"></a>

- *Type:* typing.List[str]

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#allowed_cidr_blocks GoogleStorageFtpServer#allowed_cidr_blocks}

---

##### `put_internal_config` <a name="put_internal_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putInternalConfig"></a>

```python
def put_internal_config(
  consumer_accept_list: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct] = None,
  consumer_reject_list: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerRejectListStruct] = None
) -> None
```

###### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putInternalConfig.parameter.consumerAcceptList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#consumer_accept_list GoogleStorageFtpServer#consumer_accept_list}

---

###### `consumer_reject_list`<sup>Optional</sup> <a name="consumer_reject_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putInternalConfig.parameter.consumerRejectList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#consumer_reject_list GoogleStorageFtpServer#consumer_reject_list}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#create GoogleStorageFtpServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#delete GoogleStorageFtpServer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#update GoogleStorageFtpServer#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_config` <a name="reset_external_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetExternalConfig"></a>

```python
def reset_external_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internal_config` <a name="reset_internal_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetInternalConfig"></a>

```python
def reset_internal_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleStorageFtpServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleStorageFtpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageFtpServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageFtpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageFtpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfig">external_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference">GoogleStorageFtpServerExternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfig">internal_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference">GoogleStorageFtpServerInternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serviceAgent">service_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference">GoogleStorageFtpServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfigInput">external_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfigInput">internal_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `external_config`<sup>Required</sup> <a name="external_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfig"></a>

```python
external_config: GoogleStorageFtpServerExternalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference">GoogleStorageFtpServerExternalConfigOutputReference</a>

---

##### `internal_config`<sup>Required</sup> <a name="internal_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfig"></a>

```python
internal_config: GoogleStorageFtpServerInternalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference">GoogleStorageFtpServerInternalConfigOutputReference</a>

---

##### `service_agent`<sup>Required</sup> <a name="service_agent" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serviceAgent"></a>

```python
service_agent: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeouts"></a>

```python
timeouts: GoogleStorageFtpServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference">GoogleStorageFtpServerTimeoutsOutputReference</a>

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_config_input`<sup>Optional</sup> <a name="external_config_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.externalConfigInput"></a>

```python
external_config_input: GoogleStorageFtpServerExternalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_config_input`<sup>Optional</sup> <a name="internal_config_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.internalConfigInput"></a>

```python
internal_config_input: GoogleStorageFtpServerInternalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleStorageFtpServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageFtpServerConfig <a name="GoogleStorageFtpServerConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_type: str,
  location: str,
  server_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  external_config: GoogleStorageFtpServerExternalConfig = None,
  id: str = None,
  internal_config: GoogleStorageFtpServerInternalConfig = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleStorageFtpServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.accessType">access_type</a></code> | <code>str</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.location">location</a></code> | <code>str</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.serverId">server_id</a></code> | <code>str</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.displayName">display_name</a></code> | <code>str</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.externalConfig">external_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#id GoogleStorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.internalConfig">internal_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#access_type GoogleStorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#location GoogleStorageFtpServer#location}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#server_id GoogleStorageFtpServer#server_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#deletion_policy GoogleStorageFtpServer#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#display_name GoogleStorageFtpServer#display_name}

---

##### `external_config`<sup>Optional</sup> <a name="external_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.externalConfig"></a>

```python
external_config: GoogleStorageFtpServerExternalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#external_config GoogleStorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#id GoogleStorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_config`<sup>Optional</sup> <a name="internal_config" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.internalConfig"></a>

```python
internal_config: GoogleStorageFtpServerInternalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#internal_config GoogleStorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#labels GoogleStorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageFtpServerTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#timeouts GoogleStorageFtpServer#timeouts}

---

### GoogleStorageFtpServerExternalConfig <a name="GoogleStorageFtpServerExternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerExternalConfig(
  allowed_cidr_blocks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig.property.allowedCidrBlocks">allowed_cidr_blocks</a></code> | <code>typing.List[str]</code> | A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server. |

---

##### `allowed_cidr_blocks`<sup>Optional</sup> <a name="allowed_cidr_blocks" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig.property.allowedCidrBlocks"></a>

```python
allowed_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#allowed_cidr_blocks GoogleStorageFtpServer#allowed_cidr_blocks}

---

### GoogleStorageFtpServerInternalConfig <a name="GoogleStorageFtpServerInternalConfig" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfig(
  consumer_accept_list: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct] = None,
  consumer_reject_list: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerRejectListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerAcceptList">consumer_accept_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]</code> | consumer_accept_list block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerRejectList">consumer_reject_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]</code> | consumer_reject_list block. |

---

##### `consumer_accept_list`<sup>Optional</sup> <a name="consumer_accept_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerAcceptList"></a>

```python
consumer_accept_list: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#consumer_accept_list GoogleStorageFtpServer#consumer_accept_list}

---

##### `consumer_reject_list`<sup>Optional</sup> <a name="consumer_reject_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig.property.consumerRejectList"></a>

```python
consumer_reject_list: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerRejectListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#consumer_reject_list GoogleStorageFtpServer#consumer_reject_list}

---

### GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct <a name="GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct(
  connection_limit: typing.Union[int, float],
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum number of Private Service Connect endpoints that can be created in the consumer project. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.project">project</a></code> | <code>str</code> | The project that is allowed to connect, in the format 'projects/{project}'. |

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of Private Service Connect endpoints that can be created in the consumer project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#connection_limit GoogleStorageFtpServer#connection_limit}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct.property.project"></a>

```python
project: str
```

- *Type:* str

The project that is allowed to connect, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}

---

### GoogleStorageFtpServerInternalConfigConsumerRejectListStruct <a name="GoogleStorageFtpServerInternalConfigConsumerRejectListStruct" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct(
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct.property.project">project</a></code> | <code>str</code> | The project that is rejected from connecting, in the format 'projects/{project}'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct.property.project"></a>

```python
project: str
```

- *Type:* str

The project that is rejected from connecting, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#project GoogleStorageFtpServer#project}

---

### GoogleStorageFtpServerTimeouts <a name="GoogleStorageFtpServerTimeouts" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#create GoogleStorageFtpServer#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#delete GoogleStorageFtpServer#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#update GoogleStorageFtpServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#create GoogleStorageFtpServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#delete GoogleStorageFtpServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_storage_ftp_server#update GoogleStorageFtpServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageFtpServerExternalConfigOutputReference <a name="GoogleStorageFtpServerExternalConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks">reset_allowed_cidr_blocks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_cidr_blocks` <a name="reset_allowed_cidr_blocks" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks"></a>

```python
def reset_allowed_cidr_blocks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput">allowed_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks">allowed_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `allowed_cidr_blocks_input`<sup>Optional</sup> <a name="allowed_cidr_blocks_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput"></a>

```python
allowed_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_cidr_blocks`<sup>Required</sup> <a name="allowed_cidr_blocks" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks"></a>

```python
allowed_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageFtpServerExternalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerExternalConfig">GoogleStorageFtpServerExternalConfig</a>

---


### GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList <a name="GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

---


### GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference <a name="GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput">connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_limit_input`<sup>Optional</sup> <a name="connection_limit_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput"></a>

```python
connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>

---


### GoogleStorageFtpServerInternalConfigConsumerRejectListStructList <a name="GoogleStorageFtpServerInternalConfigConsumerRejectListStructList" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerRejectListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]

---


### GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference <a name="GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageFtpServerInternalConfigConsumerRejectListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>

---


### GoogleStorageFtpServerInternalConfigOutputReference <a name="GoogleStorageFtpServerInternalConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerAcceptList">put_consumer_accept_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerRejectList">put_consumer_reject_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList">reset_consumer_accept_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerRejectList">reset_consumer_reject_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_consumer_accept_list` <a name="put_consumer_accept_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerAcceptList"></a>

```python
def put_consumer_accept_list(
  value: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerAcceptList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

---

##### `put_consumer_reject_list` <a name="put_consumer_reject_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerRejectList"></a>

```python
def put_consumer_reject_list(
  value: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerRejectListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.putConsumerRejectList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]

---

##### `reset_consumer_accept_list` <a name="reset_consumer_accept_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList"></a>

```python
def reset_consumer_accept_list() -> None
```

##### `reset_consumer_reject_list` <a name="reset_consumer_reject_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.resetConsumerRejectList"></a>

```python
def reset_consumer_reject_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptList">consumer_accept_list</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList">GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectList">consumer_reject_list</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList">GoogleStorageFtpServerInternalConfigConsumerRejectListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput">consumer_accept_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput">consumer_reject_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_accept_list`<sup>Required</sup> <a name="consumer_accept_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptList"></a>

```python
consumer_accept_list: GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList">GoogleStorageFtpServerInternalConfigConsumerAcceptListStructList</a>

---

##### `consumer_reject_list`<sup>Required</sup> <a name="consumer_reject_list" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectList"></a>

```python
consumer_reject_list: GoogleStorageFtpServerInternalConfigConsumerRejectListStructList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStructList">GoogleStorageFtpServerInternalConfigConsumerRejectListStructList</a>

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `consumer_accept_list_input`<sup>Optional</sup> <a name="consumer_accept_list_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput"></a>

```python
consumer_accept_list_input: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct">GoogleStorageFtpServerInternalConfigConsumerAcceptListStruct</a>]

---

##### `consumer_reject_list_input`<sup>Optional</sup> <a name="consumer_reject_list_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput"></a>

```python
consumer_reject_list_input: IResolvable | typing.List[GoogleStorageFtpServerInternalConfigConsumerRejectListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigConsumerRejectListStruct">GoogleStorageFtpServerInternalConfigConsumerRejectListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageFtpServerInternalConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerInternalConfig">GoogleStorageFtpServerInternalConfig</a>

---


### GoogleStorageFtpServerTimeoutsOutputReference <a name="GoogleStorageFtpServerTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_ftp_server

googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageFtpServerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageFtpServer.GoogleStorageFtpServerTimeouts">GoogleStorageFtpServerTimeouts</a>

---



