# `googleOracleDatabaseDbSystem` Submodule <a name="`googleOracleDatabaseDbSystem` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseDbSystem <a name="GoogleOracleDatabaseDbSystem" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system google_oracle_database_db_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_system_id: str,
  display_name: str,
  location: str,
  odb_subnet: str,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  properties: GoogleOracleDatabaseDbSystemProperties = None,
  timeouts: GoogleOracleDatabaseDbSystemTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | The ID of the DbSystem to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the System db. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | The GCP Oracle zone where Oracle DbSystem is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.dbSystemId"></a>

- *Type:* str

The ID of the DbSystem to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_system_id GoogleOracleDatabaseDbSystem#db_system_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the System db. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#location GoogleOracleDatabaseDbSystem#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.odbSubnet"></a>

- *Type:* str

The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#odb_subnet GoogleOracleDatabaseDbSystem#odb_subnet}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#deletion_policy GoogleOracleDatabaseDbSystem#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#deletion_protection GoogleOracleDatabaseDbSystem#deletion_protection}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.gcpOracleZone"></a>

- *Type:* str

The GCP Oracle zone where Oracle DbSystem is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels or tags associated with the DbSystem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#labels GoogleOracleDatabaseDbSystem#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.odbNetwork"></a>

- *Type:* str

The name of the OdbNetwork associated with the DbSystem.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#odb_network GoogleOracleDatabaseDbSystem#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#timeouts GoogleOracleDatabaseDbSystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetGcpOracleZone">reset_gcp_oracle_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOdbNetwork">reset_odb_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties"></a>

```python
def put_properties(
  compute_count: typing.Union[int, float],
  database_edition: str,
  initial_data_storage_size_gb: typing.Union[int, float],
  license_model: str,
  shape: str,
  ssh_public_keys: typing.List[str],
  compute_model: str = None,
  data_collection_options: GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions = None,
  data_storage_size_gb: typing.Union[int, float] = None,
  db_home: GoogleOracleDatabaseDbSystemPropertiesDbHome = None,
  db_system_options: GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions = None,
  domain: str = None,
  hostname_prefix: str = None,
  memory_size_gb: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  private_ip: str = None,
  reco_storage_size_gb: typing.Union[int, float] = None,
  time_zone: GoogleOracleDatabaseDbSystemPropertiesTimeZone = None
) -> None
```

###### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

The number of CPU cores to enable for the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#compute_count GoogleOracleDatabaseDbSystem#compute_count}

---

###### `database_edition`<sup>Required</sup> <a name="database_edition" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.databaseEdition"></a>

- *Type:* str

The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database_edition GoogleOracleDatabaseDbSystem#database_edition}

---

###### `initial_data_storage_size_gb`<sup>Required</sup> <a name="initial_data_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.initialDataStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

The initial data storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#initial_data_storage_size_gb GoogleOracleDatabaseDbSystem#initial_data_storage_size_gb}

---

###### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.licenseModel"></a>

- *Type:* str

The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#license_model GoogleOracleDatabaseDbSystem#license_model}

---

###### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.shape"></a>

- *Type:* str

Shape of DB System.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#shape GoogleOracleDatabaseDbSystem#shape}

---

###### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

SSH public keys to be stored with the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#ssh_public_keys GoogleOracleDatabaseDbSystem#ssh_public_keys}

---

###### `compute_model`<sup>Optional</sup> <a name="compute_model" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.computeModel"></a>

- *Type:* str

The compute model of the DbSystem. Possible values: ECPU OCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#compute_model GoogleOracleDatabaseDbSystem#compute_model}

---

###### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#data_collection_options GoogleOracleDatabaseDbSystem#data_collection_options}

---

###### `data_storage_size_gb`<sup>Optional</sup> <a name="data_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.dataStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

The data storage size in GB that is currently available to DbSystems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#data_storage_size_gb GoogleOracleDatabaseDbSystem#data_storage_size_gb}

---

###### `db_home`<sup>Optional</sup> <a name="db_home" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.dbHome"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_home GoogleOracleDatabaseDbSystem#db_home}

---

###### `db_system_options`<sup>Optional</sup> <a name="db_system_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.dbSystemOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_system_options GoogleOracleDatabaseDbSystem#db_system_options}

---

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.domain"></a>

- *Type:* str

The host domain name of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#domain GoogleOracleDatabaseDbSystem#domain}

---

###### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.hostnamePrefix"></a>

- *Type:* str

Prefix for DB System host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#hostname_prefix GoogleOracleDatabaseDbSystem#hostname_prefix}

---

###### `memory_size_gb`<sup>Optional</sup> <a name="memory_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.memorySizeGb"></a>

- *Type:* typing.Union[int, float]

The memory size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#memory_size_gb GoogleOracleDatabaseDbSystem#memory_size_gb}

---

###### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes in the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#node_count GoogleOracleDatabaseDbSystem#node_count}

---

###### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.privateIp"></a>

- *Type:* str

The private IP address of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#private_ip GoogleOracleDatabaseDbSystem#private_ip}

---

###### `reco_storage_size_gb`<sup>Optional</sup> <a name="reco_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.recoStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

The reco/redo storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#reco_storage_size_gb GoogleOracleDatabaseDbSystem#reco_storage_size_gb}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putProperties.parameter.timeZone"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#time_zone GoogleOracleDatabaseDbSystem#time_zone}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#create GoogleOracleDatabaseDbSystem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#delete GoogleOracleDatabaseDbSystem#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#update GoogleOracleDatabaseDbSystem#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_gcp_oracle_zone` <a name="reset_gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetGcpOracleZone"></a>

```python
def reset_gcp_oracle_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_odb_network` <a name="reset_odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetOdbNetwork"></a>

```python
def reset_odb_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleOracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOracleDatabaseDbSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOracleDatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference">GoogleOracleDatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZoneInput">gcp_oracle_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetworkInput">odb_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnetInput">odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetwork">odb_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.properties"></a>

```python
properties: GoogleOracleDatabaseDbSystemPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseDbSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference">GoogleOracleDatabaseDbSystemTimeoutsOutputReference</a>

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gcp_oracle_zone_input`<sup>Optional</sup> <a name="gcp_oracle_zone_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZoneInput"></a>

```python
gcp_oracle_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `odb_network_input`<sup>Optional</sup> <a name="odb_network_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetworkInput"></a>

```python
odb_network_input: str
```

- *Type:* str

---

##### `odb_subnet_input`<sup>Optional</sup> <a name="odb_subnet_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnetInput"></a>

```python
odb_subnet_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.propertiesInput"></a>

```python
properties_input: GoogleOracleDatabaseDbSystemProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleOracleDatabaseDbSystemTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `odb_network`<sup>Required</sup> <a name="odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseDbSystemConfig <a name="GoogleOracleDatabaseDbSystemConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_system_id: str,
  display_name: str,
  location: str,
  odb_subnet: str,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  properties: GoogleOracleDatabaseDbSystemProperties = None,
  timeouts: GoogleOracleDatabaseDbSystemTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | The ID of the DbSystem to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the System db. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | The GCP Oracle zone where Oracle DbSystem is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

The ID of the DbSystem to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_system_id GoogleOracleDatabaseDbSystem#db_system_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the System db. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#location GoogleOracleDatabaseDbSystem#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#odb_subnet GoogleOracleDatabaseDbSystem#odb_subnet}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#deletion_policy GoogleOracleDatabaseDbSystem#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#deletion_protection GoogleOracleDatabaseDbSystem#deletion_protection}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

The GCP Oracle zone where Oracle DbSystem is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels or tags associated with the DbSystem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#labels GoogleOracleDatabaseDbSystem#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

The name of the OdbNetwork associated with the DbSystem.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#odb_network GoogleOracleDatabaseDbSystem#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#project GoogleOracleDatabaseDbSystem#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.properties"></a>

```python
properties: GoogleOracleDatabaseDbSystemProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemConfig.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseDbSystemTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#timeouts GoogleOracleDatabaseDbSystem#timeouts}

---

### GoogleOracleDatabaseDbSystemProperties <a name="GoogleOracleDatabaseDbSystemProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties(
  compute_count: typing.Union[int, float],
  database_edition: str,
  initial_data_storage_size_gb: typing.Union[int, float],
  license_model: str,
  shape: str,
  ssh_public_keys: typing.List[str],
  compute_model: str = None,
  data_collection_options: GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions = None,
  data_storage_size_gb: typing.Union[int, float] = None,
  db_home: GoogleOracleDatabaseDbSystemPropertiesDbHome = None,
  db_system_options: GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions = None,
  domain: str = None,
  hostname_prefix: str = None,
  memory_size_gb: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  private_ip: str = None,
  reco_storage_size_gb: typing.Union[int, float] = None,
  time_zone: GoogleOracleDatabaseDbSystemPropertiesTimeZone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores to enable for the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.databaseEdition">database_edition</a></code> | <code>str</code> | The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb">initial_data_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | The initial data storage size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.licenseModel">license_model</a></code> | <code>str</code> | The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.shape">shape</a></code> | <code>str</code> | Shape of DB System. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | SSH public keys to be stored with the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeModel">compute_model</a></code> | <code>str</code> | The compute model of the DbSystem. Possible values: ECPU OCPU. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataStorageSizeGb">data_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | The data storage size in GB that is currently available to DbSystems. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbHome">db_home</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | db_home block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbSystemOptions">db_system_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.domain">domain</a></code> | <code>str</code> | The host domain name of the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | Prefix for DB System host names. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | The memory size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.privateIp">private_ip</a></code> | <code>str</code> | The private IP address of the DbSystem. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.recoStorageSizeGb">reco_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | The reco/redo storage size in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | time_zone block. |

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU cores to enable for the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#compute_count GoogleOracleDatabaseDbSystem#compute_count}

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database_edition GoogleOracleDatabaseDbSystem#database_edition}

---

##### `initial_data_storage_size_gb`<sup>Required</sup> <a name="initial_data_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb"></a>

```python
initial_data_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial data storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#initial_data_storage_size_gb GoogleOracleDatabaseDbSystem#initial_data_storage_size_gb}

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#license_model GoogleOracleDatabaseDbSystem#license_model}

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.shape"></a>

```python
shape: str
```

- *Type:* str

Shape of DB System.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#shape GoogleOracleDatabaseDbSystem#shape}

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

SSH public keys to be stored with the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#ssh_public_keys GoogleOracleDatabaseDbSystem#ssh_public_keys}

---

##### `compute_model`<sup>Optional</sup> <a name="compute_model" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

The compute model of the DbSystem. Possible values: ECPU OCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#compute_model GoogleOracleDatabaseDbSystem#compute_model}

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataCollectionOptions"></a>

```python
data_collection_options: GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#data_collection_options GoogleOracleDatabaseDbSystem#data_collection_options}

---

##### `data_storage_size_gb`<sup>Optional</sup> <a name="data_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dataStorageSizeGb"></a>

```python
data_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data storage size in GB that is currently available to DbSystems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#data_storage_size_gb GoogleOracleDatabaseDbSystem#data_storage_size_gb}

---

##### `db_home`<sup>Optional</sup> <a name="db_home" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbHome"></a>

```python
db_home: GoogleOracleDatabaseDbSystemPropertiesDbHome
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_home GoogleOracleDatabaseDbSystem#db_home}

---

##### `db_system_options`<sup>Optional</sup> <a name="db_system_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.dbSystemOptions"></a>

```python
db_system_options: GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_system_options GoogleOracleDatabaseDbSystem#db_system_options}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.domain"></a>

```python
domain: str
```

- *Type:* str

The host domain name of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#domain GoogleOracleDatabaseDbSystem#domain}

---

##### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

Prefix for DB System host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#hostname_prefix GoogleOracleDatabaseDbSystem#hostname_prefix}

---

##### `memory_size_gb`<sup>Optional</sup> <a name="memory_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The memory size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#memory_size_gb GoogleOracleDatabaseDbSystem#memory_size_gb}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes in the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#node_count GoogleOracleDatabaseDbSystem#node_count}

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

The private IP address of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#private_ip GoogleOracleDatabaseDbSystem#private_ip}

---

##### `reco_storage_size_gb`<sup>Optional</sup> <a name="reco_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.recoStorageSizeGb"></a>

```python
reco_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The reco/redo storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#reco_storage_size_gb GoogleOracleDatabaseDbSystem#reco_storage_size_gb}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties.property.timeZone"></a>

```python
time_zone: GoogleOracleDatabaseDbSystemPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#time_zone GoogleOracleDatabaseDbSystem#time_zone}

---

### GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions <a name="GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#is_diagnostics_events_enabled GoogleOracleDatabaseDbSystem#is_diagnostics_events_enabled}

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#is_incident_logs_enabled GoogleOracleDatabaseDbSystem#is_incident_logs_enabled}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHome <a name="GoogleOracleDatabaseDbSystemPropertiesDbHome" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome(
  database: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase,
  db_version: str,
  display_name: str = None,
  is_unified_auditing_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.database">database</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | database block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.dbVersion">db_version</a></code> | <code>str</code> | A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.displayName">display_name</a></code> | <code>str</code> | The display name for the Database Home. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled">is_unified_auditing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether unified auditing is enabled for the Database Home. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.database"></a>

```python
database: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database GoogleOracleDatabaseDbSystem#database}

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the Database Home. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

##### `is_unified_auditing_enabled`<sup>Optional</sup> <a name="is_unified_auditing_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled"></a>

```python
is_unified_auditing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether unified auditing is enabled for the Database Home.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#is_unified_auditing_enabled GoogleOracleDatabaseDbSystem#is_unified_auditing_enabled}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase(
  admin_password: str,
  database_id: str,
  character_set: str = None,
  db_home_name: str = None,
  db_name: str = None,
  db_unique_name: str = None,
  gcp_oracle_zone: str = None,
  ncharacter_set: str = None,
  pluggable_database_id: str = None,
  pluggable_database_name: str = None,
  properties: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties = None,
  tde_wallet_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId">database_id</a></code> | <code>str</code> | The database ID of the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet">character_set</a></code> | <code>str</code> | The character set for the database. The default is AL32UTF8. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName">db_home_name</a></code> | <code>str</code> | The name of the DbHome resource associated with the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName">db_name</a></code> | <code>str</code> | The database name. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | The DB_UNIQUE_NAME of the Oracle Database being backed up. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | The GCP Oracle zone where the Database is created. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | The national character set for the database. The default is AL16UTF16. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | The ID of the pluggable database associated with Database. The ID must be unique within the project and location. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName">pluggable_database_name</a></code> | <code>str</code> | The pluggable dataabse associated with the Database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | The TDE wallet password for the database. |

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#admin_password GoogleOracleDatabaseDbSystem#admin_password}

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

The database ID of the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database_id GoogleOracleDatabaseDbSystem#database_id}

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

The character set for the database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#character_set GoogleOracleDatabaseDbSystem#character_set}

---

##### `db_home_name`<sup>Optional</sup> <a name="db_home_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName"></a>

```python
db_home_name: str
```

- *Type:* str

The name of the DbHome resource associated with the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_home_name GoogleOracleDatabaseDbSystem#db_home_name}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

The database name.

The name must begin with an alphabetic character and can
contain a maximum of eight alphanumeric characters. Special characters are
not permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_name GoogleOracleDatabaseDbSystem#db_name}

---

##### `db_unique_name`<sup>Optional</sup> <a name="db_unique_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

The DB_UNIQUE_NAME of the Oracle Database being backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_unique_name GoogleOracleDatabaseDbSystem#db_unique_name}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

The GCP Oracle zone where the Database is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

The national character set for the database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#ncharacter_set GoogleOracleDatabaseDbSystem#ncharacter_set}

---

##### `pluggable_database_id`<sup>Optional</sup> <a name="pluggable_database_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

The ID of the pluggable database associated with Database. The ID must be unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#pluggable_database_id GoogleOracleDatabaseDbSystem#pluggable_database_id}

---

##### `pluggable_database_name`<sup>Optional</sup> <a name="pluggable_database_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName"></a>

```python
pluggable_database_name: str
```

- *Type:* str

The pluggable dataabse associated with the Database.

The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#pluggable_database_name GoogleOracleDatabaseDbSystem#pluggable_database_name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties"></a>

```python
properties: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

##### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

The TDE wallet password for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#tde_wallet_password GoogleOracleDatabaseDbSystem#tde_wallet_password}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties(
  db_version: str,
  database_management_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig = None,
  db_backup_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion">db_version</a></code> | <code>str</code> | The Oracle Database version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig">database_management_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | database_management_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | db_backup_config block. |

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

The Oracle Database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

##### `database_management_config`<sup>Optional</sup> <a name="database_management_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig"></a>

```python
database_management_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

database_management_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database_management_config GoogleOracleDatabaseDbSystem#database_management_config}

---

##### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig"></a>

```python
db_backup_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_backup_config GoogleOracleDatabaseDbSystem#db_backup_config}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig()
```


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig(
  auto_backup_enabled: bool | IResolvable = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  auto_incremental_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: IResolvable | typing.List[GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails] = None,
  retention_period_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, enables automatic backups on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | The window in which the full backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow">auto_incremental_backup_window</a></code> | <code>str</code> | The window in which the incremental backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails">backup_destination_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]</code> | backup_destination_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | The number of days an automatic backup is retained before being automatically deleted. |

---

##### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, enables automatic backups on the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_backup_enabled GoogleOracleDatabaseDbSystem#auto_backup_enabled}

---

##### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_full_backup_day GoogleOracleDatabaseDbSystem#auto_full_backup_day}

---

##### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

The window in which the full backup should be performed on the database.

If no value is provided, the default is anytime.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_full_backup_window GoogleOracleDatabaseDbSystem#auto_full_backup_window}

---

##### `auto_incremental_backup_window`<sup>Optional</sup> <a name="auto_incremental_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow"></a>

```python
auto_incremental_backup_window: str
```

- *Type:* str

The window in which the incremental backup should be performed on the database.

If no value is provided, the default is anytime except the auto
full backup day.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_incremental_backup_window GoogleOracleDatabaseDbSystem#auto_incremental_backup_window}

---

##### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#backup_deletion_policy GoogleOracleDatabaseDbSystem#backup_deletion_policy}

---

##### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails"></a>

```python
backup_destination_details: IResolvable | typing.List[GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#backup_destination_details GoogleOracleDatabaseDbSystem#backup_destination_details}

---

##### `retention_period_days`<sup>Optional</sup> <a name="retention_period_days" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days an automatic backup is retained before being automatically deleted.

This value determines the earliest point in time to
which a database can be restored. Min: 1, Max: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#retention_period_days GoogleOracleDatabaseDbSystem#retention_period_days}

---

### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>str</code> | The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#type GoogleOracleDatabaseDbSystem#type}

---

### GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions <a name="GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions(
  storage_management: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement">storage_management</a></code> | <code>str</code> | The storage option used in DB system. Possible values: ASM LVM. |

---

##### `storage_management`<sup>Optional</sup> <a name="storage_management" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

The storage option used in DB system. Possible values: ASM LVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#storage_management GoogleOracleDatabaseDbSystem#storage_management}

---

### GoogleOracleDatabaseDbSystemPropertiesTimeZone <a name="GoogleOracleDatabaseDbSystemPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.property.id">id</a></code> | <code>str</code> | IANA Time Zone Database time zone. For example "America/New_York". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone.property.id"></a>

```python
id: str
```

- *Type:* str

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GoogleOracleDatabaseDbSystemTimeouts <a name="GoogleOracleDatabaseDbSystemTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#create GoogleOracleDatabaseDbSystem#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#delete GoogleOracleDatabaseDbSystem#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#update GoogleOracleDatabaseDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#create GoogleOracleDatabaseDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#delete GoogleOracleDatabaseDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#update GoogleOracleDatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName">reset_db_home_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName">reset_db_unique_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone">reset_gcp_oracle_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet">reset_ncharacter_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId">reset_pluggable_database_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName">reset_pluggable_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword">reset_tde_wallet_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties"></a>

```python
def put_properties(
  db_version: str,
  database_management_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig = None,
  db_backup_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig = None
) -> None
```

###### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties.parameter.dbVersion"></a>

- *Type:* str

The Oracle Database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

###### `database_management_config`<sup>Optional</sup> <a name="database_management_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties.parameter.databaseManagementConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

database_management_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database_management_config GoogleOracleDatabaseDbSystem#database_management_config}

---

###### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties.parameter.dbBackupConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_backup_config GoogleOracleDatabaseDbSystem#db_backup_config}

---

##### `reset_character_set` <a name="reset_character_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_db_home_name` <a name="reset_db_home_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName"></a>

```python
def reset_db_home_name() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_db_unique_name` <a name="reset_db_unique_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```python
def reset_db_unique_name() -> None
```

##### `reset_gcp_oracle_zone` <a name="reset_gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone"></a>

```python
def reset_gcp_oracle_zone() -> None
```

##### `reset_ncharacter_set` <a name="reset_ncharacter_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```python
def reset_ncharacter_set() -> None
```

##### `reset_pluggable_database_id` <a name="reset_pluggable_database_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId"></a>

```python
def reset_pluggable_database_id() -> None
```

##### `reset_pluggable_database_name` <a name="reset_pluggable_database_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName"></a>

```python
def reset_pluggable_database_name() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_tde_wallet_password` <a name="reset_tde_wallet_password" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```python
def reset_tde_wallet_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus">ops_insights_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput">db_home_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput">db_unique_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput">gcp_oracle_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput">ncharacter_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput">pluggable_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput">pluggable_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">tde_wallet_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName">db_home_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName">pluggable_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `ops_insights_status`<sup>Required</sup> <a name="ops_insights_status" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus"></a>

```python
ops_insights_status: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties"></a>

```python
properties: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `db_home_name_input`<sup>Optional</sup> <a name="db_home_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput"></a>

```python
db_home_name_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_unique_name_input`<sup>Optional</sup> <a name="db_unique_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```python
db_unique_name_input: str
```

- *Type:* str

---

##### `gcp_oracle_zone_input`<sup>Optional</sup> <a name="gcp_oracle_zone_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput"></a>

```python
gcp_oracle_zone_input: str
```

- *Type:* str

---

##### `ncharacter_set_input`<sup>Optional</sup> <a name="ncharacter_set_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```python
ncharacter_set_input: str
```

- *Type:* str

---

##### `pluggable_database_id_input`<sup>Optional</sup> <a name="pluggable_database_id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput"></a>

```python
pluggable_database_id_input: str
```

- *Type:* str

---

##### `pluggable_database_name_input`<sup>Optional</sup> <a name="pluggable_database_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput"></a>

```python
pluggable_database_name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput"></a>

```python
properties_input: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `tde_wallet_password_input`<sup>Optional</sup> <a name="tde_wallet_password_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```python
tde_wallet_password_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `db_home_name`<sup>Required</sup> <a name="db_home_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName"></a>

```python
db_home_name: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

---

##### `pluggable_database_name`<sup>Required</sup> <a name="pluggable_database_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName"></a>

```python
pluggable_database_name: str
```

- *Type:* str

---

##### `tde_wallet_password`<sup>Required</sup> <a name="tde_wallet_password" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState">management_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType">management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `management_state`<sup>Required</sup> <a name="management_state" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState"></a>

```python
management_state: str
```

- *Type:* str

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails">put_backup_destination_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled">reset_auto_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay">reset_auto_full_backup_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow">reset_auto_full_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow">reset_auto_incremental_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy">reset_backup_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails">reset_backup_destination_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays">reset_retention_period_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_destination_details` <a name="put_backup_destination_details" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```python
def put_backup_destination_details(
  value: IResolvable | typing.List[GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]

---

##### `reset_auto_backup_enabled` <a name="reset_auto_backup_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```python
def reset_auto_backup_enabled() -> None
```

##### `reset_auto_full_backup_day` <a name="reset_auto_full_backup_day" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```python
def reset_auto_full_backup_day() -> None
```

##### `reset_auto_full_backup_window` <a name="reset_auto_full_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```python
def reset_auto_full_backup_window() -> None
```

##### `reset_auto_incremental_backup_window` <a name="reset_auto_incremental_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow"></a>

```python
def reset_auto_incremental_backup_window() -> None
```

##### `reset_backup_deletion_policy` <a name="reset_backup_deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```python
def reset_backup_deletion_policy() -> None
```

##### `reset_backup_destination_details` <a name="reset_backup_destination_details" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```python
def reset_backup_destination_details() -> None
```

##### `reset_retention_period_days` <a name="reset_retention_period_days" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays"></a>

```python
def reset_retention_period_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput">auto_backup_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput">auto_full_backup_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput">auto_full_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput">auto_incremental_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backup_deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backup_destination_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput">retention_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow">auto_incremental_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a>

---

##### `auto_backup_enabled_input`<sup>Optional</sup> <a name="auto_backup_enabled_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```python
auto_backup_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_full_backup_day_input`<sup>Optional</sup> <a name="auto_full_backup_day_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```python
auto_full_backup_day_input: str
```

- *Type:* str

---

##### `auto_full_backup_window_input`<sup>Optional</sup> <a name="auto_full_backup_window_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```python
auto_full_backup_window_input: str
```

- *Type:* str

---

##### `auto_incremental_backup_window_input`<sup>Optional</sup> <a name="auto_incremental_backup_window_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput"></a>

```python
auto_incremental_backup_window_input: str
```

- *Type:* str

---

##### `backup_deletion_policy_input`<sup>Optional</sup> <a name="backup_deletion_policy_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```python
backup_deletion_policy_input: str
```

- *Type:* str

---

##### `backup_destination_details_input`<sup>Optional</sup> <a name="backup_destination_details_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```python
backup_destination_details_input: IResolvable | typing.List[GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]

---

##### `retention_period_days_input`<sup>Optional</sup> <a name="retention_period_days_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput"></a>

```python
retention_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_backup_enabled`<sup>Required</sup> <a name="auto_backup_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_full_backup_day`<sup>Required</sup> <a name="auto_full_backup_day" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

---

##### `auto_full_backup_window`<sup>Required</sup> <a name="auto_full_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

---

##### `auto_incremental_backup_window`<sup>Required</sup> <a name="auto_incremental_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow"></a>

```python
auto_incremental_backup_window: str
```

- *Type:* str

---

##### `backup_deletion_policy`<sup>Required</sup> <a name="backup_deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig">put_database_management_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig">put_db_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig">reset_database_management_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig">reset_db_backup_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database_management_config` <a name="put_database_management_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig"></a>

```python
def put_database_management_config() -> None
```

##### `put_db_backup_config` <a name="put_db_backup_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig"></a>

```python
def put_db_backup_config(
  auto_backup_enabled: bool | IResolvable = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  auto_incremental_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: IResolvable | typing.List[GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails] = None,
  retention_period_days: typing.Union[int, float] = None
) -> None
```

###### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.autoBackupEnabled"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, enables automatic backups on the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_backup_enabled GoogleOracleDatabaseDbSystem#auto_backup_enabled}

---

###### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.autoFullBackupDay"></a>

- *Type:* str

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_full_backup_day GoogleOracleDatabaseDbSystem#auto_full_backup_day}

---

###### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.autoFullBackupWindow"></a>

- *Type:* str

The window in which the full backup should be performed on the database.

If no value is provided, the default is anytime.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_full_backup_window GoogleOracleDatabaseDbSystem#auto_full_backup_window}

---

###### `auto_incremental_backup_window`<sup>Optional</sup> <a name="auto_incremental_backup_window" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.autoIncrementalBackupWindow"></a>

- *Type:* str

The window in which the incremental backup should be performed on the database.

If no value is provided, the default is anytime except the auto
full backup day.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#auto_incremental_backup_window GoogleOracleDatabaseDbSystem#auto_incremental_backup_window}

---

###### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.backupDeletionPolicy"></a>

- *Type:* str

This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#backup_deletion_policy GoogleOracleDatabaseDbSystem#backup_deletion_policy}

---

###### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.backupDestinationDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#backup_destination_details GoogleOracleDatabaseDbSystem#backup_destination_details}

---

###### `retention_period_days`<sup>Optional</sup> <a name="retention_period_days" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.retentionPeriodDays"></a>

- *Type:* typing.Union[int, float]

The number of days an automatic backup is retained before being automatically deleted.

This value determines the earliest point in time to
which a database can be restored. Min: 1, Max: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#retention_period_days GoogleOracleDatabaseDbSystem#retention_period_days}

---

##### `reset_database_management_config` <a name="reset_database_management_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig"></a>

```python
def reset_database_management_config() -> None
```

##### `reset_db_backup_config` <a name="reset_db_backup_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig"></a>

```python
def reset_db_backup_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig">database_management_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput">database_management_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput">db_backup_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_management_config`<sup>Required</sup> <a name="database_management_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig"></a>

```python
database_management_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a>

---

##### `db_backup_config`<sup>Required</sup> <a name="db_backup_config" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig"></a>

```python
db_backup_config: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `database_management_config_input`<sup>Optional</sup> <a name="database_management_config_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput"></a>

```python
database_management_config_input: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `db_backup_config_input`<sup>Optional</sup> <a name="db_backup_config_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput"></a>

```python
db_backup_config_input: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled">reset_is_unified_auditing_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database` <a name="put_database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase"></a>

```python
def put_database(
  admin_password: str,
  database_id: str,
  character_set: str = None,
  db_home_name: str = None,
  db_name: str = None,
  db_unique_name: str = None,
  gcp_oracle_zone: str = None,
  ncharacter_set: str = None,
  pluggable_database_id: str = None,
  pluggable_database_name: str = None,
  properties: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties = None,
  tde_wallet_password: str = None
) -> None
```

###### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.adminPassword"></a>

- *Type:* str

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#admin_password GoogleOracleDatabaseDbSystem#admin_password}

---

###### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.databaseId"></a>

- *Type:* str

The database ID of the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database_id GoogleOracleDatabaseDbSystem#database_id}

---

###### `character_set`<sup>Optional</sup> <a name="character_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.characterSet"></a>

- *Type:* str

The character set for the database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#character_set GoogleOracleDatabaseDbSystem#character_set}

---

###### `db_home_name`<sup>Optional</sup> <a name="db_home_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.dbHomeName"></a>

- *Type:* str

The name of the DbHome resource associated with the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_home_name GoogleOracleDatabaseDbSystem#db_home_name}

---

###### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.dbName"></a>

- *Type:* str

The database name.

The name must begin with an alphabetic character and can
contain a maximum of eight alphanumeric characters. Special characters are
not permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_name GoogleOracleDatabaseDbSystem#db_name}

---

###### `db_unique_name`<sup>Optional</sup> <a name="db_unique_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.dbUniqueName"></a>

- *Type:* str

The DB_UNIQUE_NAME of the Oracle Database being backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_unique_name GoogleOracleDatabaseDbSystem#db_unique_name}

---

###### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.gcpOracleZone"></a>

- *Type:* str

The GCP Oracle zone where the Database is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#gcp_oracle_zone GoogleOracleDatabaseDbSystem#gcp_oracle_zone}

---

###### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.ncharacterSet"></a>

- *Type:* str

The national character set for the database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#ncharacter_set GoogleOracleDatabaseDbSystem#ncharacter_set}

---

###### `pluggable_database_id`<sup>Optional</sup> <a name="pluggable_database_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.pluggableDatabaseId"></a>

- *Type:* str

The ID of the pluggable database associated with Database. The ID must be unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#pluggable_database_id GoogleOracleDatabaseDbSystem#pluggable_database_id}

---

###### `pluggable_database_name`<sup>Optional</sup> <a name="pluggable_database_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.pluggableDatabaseName"></a>

- *Type:* str

The pluggable dataabse associated with the Database.

The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#pluggable_database_name GoogleOracleDatabaseDbSystem#pluggable_database_name}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#properties GoogleOracleDatabaseDbSystem#properties}

---

###### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.tdeWalletPassword"></a>

- *Type:* str

The TDE wallet password for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#tde_wallet_password GoogleOracleDatabaseDbSystem#tde_wallet_password}

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_is_unified_auditing_enabled` <a name="reset_is_unified_auditing_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled"></a>

```python
def reset_is_unified_auditing_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput">database_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput">is_unified_auditing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled">is_unified_auditing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database"></a>

```python
database: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput"></a>

```python
database_input: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `is_unified_auditing_enabled_input`<sup>Optional</sup> <a name="is_unified_auditing_enabled_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput"></a>

```python
is_unified_auditing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_unified_auditing_enabled`<sup>Required</sup> <a name="is_unified_auditing_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled"></a>

```python
is_unified_auditing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesDbHome
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---


### GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement">reset_storage_management</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_management` <a name="reset_storage_management" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement"></a>

```python
def reset_storage_management() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput">storage_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement">storage_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_management_input`<sup>Optional</sup> <a name="storage_management_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```python
storage_management_input: str
```

- *Type:* str

---

##### `storage_management`<sup>Required</sup> <a name="storage_management" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---


### GoogleOracleDatabaseDbSystemPropertiesOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome">put_db_home</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions">put_db_system_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone">put_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel">reset_compute_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb">reset_data_storage_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbHome">reset_db_home</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions">reset_db_system_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix">reset_hostname_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb">reset_memory_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb">reset_reco_storage_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_collection_options` <a name="put_data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#is_diagnostics_events_enabled GoogleOracleDatabaseDbSystem#is_diagnostics_events_enabled}

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#is_incident_logs_enabled GoogleOracleDatabaseDbSystem#is_incident_logs_enabled}

---

##### `put_db_home` <a name="put_db_home" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome"></a>

```python
def put_db_home(
  database: GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase,
  db_version: str,
  display_name: str = None,
  is_unified_auditing_enabled: bool | IResolvable = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.database"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase">GoogleOracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#database GoogleOracleDatabaseDbSystem#database}

---

###### `db_version`<sup>Required</sup> <a name="db_version" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.dbVersion"></a>

- *Type:* str

A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#db_version GoogleOracleDatabaseDbSystem#db_version}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.displayName"></a>

- *Type:* str

The display name for the Database Home. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#display_name GoogleOracleDatabaseDbSystem#display_name}

---

###### `is_unified_auditing_enabled`<sup>Optional</sup> <a name="is_unified_auditing_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.isUnifiedAuditingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether unified auditing is enabled for the Database Home.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#is_unified_auditing_enabled GoogleOracleDatabaseDbSystem#is_unified_auditing_enabled}

---

##### `put_db_system_options` <a name="put_db_system_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions"></a>

```python
def put_db_system_options(
  storage_management: str = None
) -> None
```

###### `storage_management`<sup>Optional</sup> <a name="storage_management" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions.parameter.storageManagement"></a>

- *Type:* str

The storage option used in DB system. Possible values: ASM LVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#storage_management GoogleOracleDatabaseDbSystem#storage_management}

---

##### `put_time_zone` <a name="put_time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone"></a>

```python
def put_time_zone(
  id: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.putTimeZone.parameter.id"></a>

- *Type:* str

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_oracle_database_db_system#id GoogleOracleDatabaseDbSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reset_compute_model` <a name="reset_compute_model" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel"></a>

```python
def reset_compute_model() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_data_storage_size_gb` <a name="reset_data_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb"></a>

```python
def reset_data_storage_size_gb() -> None
```

##### `reset_db_home` <a name="reset_db_home" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbHome"></a>

```python
def reset_db_home() -> None
```

##### `reset_db_system_options` <a name="reset_db_system_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions"></a>

```python
def reset_db_system_options() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_hostname_prefix` <a name="reset_hostname_prefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix"></a>

```python
def reset_hostname_prefix() -> None
```

##### `reset_memory_size_gb` <a name="reset_memory_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb"></a>

```python
def reset_memory_size_gb() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_reco_storage_size_gb` <a name="reset_reco_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb"></a>

```python
def reset_reco_storage_size_gb() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHome">db_home</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions">db_system_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference">GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput">compute_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput">database_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput">data_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput">db_home_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput">db_system_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput">hostname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput">initial_data_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput">memory_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput">reco_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb">data_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb">initial_data_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb">reco_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions"></a>

```python
data_collection_options: GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a>

---

##### `db_home`<sup>Required</sup> <a name="db_home" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHome"></a>

```python
db_home: GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbHomeOutputReference</a>

---

##### `db_system_options`<sup>Required</sup> <a name="db_system_options" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions"></a>

```python
db_system_options: GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference">GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a>

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model_input`<sup>Optional</sup> <a name="compute_model_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput"></a>

```python
compute_model_input: str
```

- *Type:* str

---

##### `database_edition_input`<sup>Optional</sup> <a name="database_edition_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput"></a>

```python
database_edition_input: str
```

- *Type:* str

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions">GoogleOracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `data_storage_size_gb_input`<sup>Optional</sup> <a name="data_storage_size_gb_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```python
data_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_home_input`<sup>Optional</sup> <a name="db_home_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput"></a>

```python
db_home_input: GoogleOracleDatabaseDbSystemPropertiesDbHome
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbHome">GoogleOracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `db_system_options_input`<sup>Optional</sup> <a name="db_system_options_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput"></a>

```python
db_system_options_input: GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions">GoogleOracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `hostname_prefix_input`<sup>Optional</sup> <a name="hostname_prefix_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput"></a>

```python
hostname_prefix_input: str
```

- *Type:* str

---

##### `initial_data_storage_size_gb_input`<sup>Optional</sup> <a name="initial_data_storage_size_gb_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput"></a>

```python
initial_data_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `memory_size_gb_input`<sup>Optional</sup> <a name="memory_size_gb_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput"></a>

```python
memory_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `reco_storage_size_gb_input`<sup>Optional</sup> <a name="reco_storage_size_gb_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput"></a>

```python
reco_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: GoogleOracleDatabaseDbSystemPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `data_storage_size_gb`<sup>Required</sup> <a name="data_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb"></a>

```python
data_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

---

##### `initial_data_storage_size_gb`<sup>Required</sup> <a name="initial_data_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb"></a>

```python
initial_data_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `reco_storage_size_gb`<sup>Required</sup> <a name="reco_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb"></a>

```python
reco_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemProperties">GoogleOracleDatabaseDbSystemProperties</a>

---


### GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseDbSystemPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemPropertiesTimeZone">GoogleOracleDatabaseDbSystemPropertiesTimeZone</a>

---


### GoogleOracleDatabaseDbSystemTimeoutsOutputReference <a name="GoogleOracleDatabaseDbSystemTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_db_system

googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleOracleDatabaseDbSystemTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseDbSystem.GoogleOracleDatabaseDbSystemTimeouts">GoogleOracleDatabaseDbSystemTimeouts</a>

---



