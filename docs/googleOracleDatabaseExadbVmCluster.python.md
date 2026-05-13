# `googleOracleDatabaseExadbVmCluster` Submodule <a name="`googleOracleDatabaseExadbVmCluster` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseExadbVmCluster <a name="GoogleOracleDatabaseExadbVmCluster" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_odb_subnet: str,
  display_name: str,
  exadb_vm_cluster_id: str,
  location: str,
  odb_subnet: str,
  properties: GoogleOracleDatabaseExadbVmClusterProperties,
  deletion_protection: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  timeouts: GoogleOracleDatabaseExadbVmClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet"></a>

- *Type:* str

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#backup_odb_subnet GoogleOracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#display_name GoogleOracleDatabaseExadbVmCluster#display_name}

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* str

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#exadb_vm_cluster_id GoogleOracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#location GoogleOracleDatabaseExadbVmCluster#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet"></a>

- *Type:* str

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_subnet GoogleOracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#properties GoogleOracleDatabaseExadbVmCluster#properties}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_protection GoogleOracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#labels GoogleOracleDatabaseExadbVmCluster#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork"></a>

- *Type:* str

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_network GoogleOracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#timeouts GoogleOracleDatabaseExadbVmCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOdbNetwork">reset_odb_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties"></a>

```python
def put_properties(
  enabled_ecpu_count_per_node: typing.Union[int, float],
  exascale_db_storage_vault: str,
  grid_image_id: str,
  hostname_prefix: str,
  node_count: typing.Union[int, float],
  shape_attribute: str,
  ssh_public_keys: typing.List[str],
  vm_file_system_storage: GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage,
  additional_ecpu_count_per_node: typing.Union[int, float] = None,
  cluster_name: str = None,
  data_collection_options: GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions = None,
  license_model: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  time_zone: GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone = None
) -> None
```

###### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.enabledEcpuCountPerNode"></a>

- *Type:* typing.Union[int, float]

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

###### `exascale_db_storage_vault`<sup>Required</sup> <a name="exascale_db_storage_vault" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.exascaleDbStorageVault"></a>

- *Type:* str

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#exascale_db_storage_vault GoogleOracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

###### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.gridImageId"></a>

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#grid_image_id GoogleOracleDatabaseExadbVmCluster#grid_image_id}

---

###### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.hostnamePrefix"></a>

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#hostname_prefix GoogleOracleDatabaseExadbVmCluster#hostname_prefix}

---

###### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#node_count GoogleOracleDatabaseExadbVmCluster#node_count}

---

###### `shape_attribute`<sup>Required</sup> <a name="shape_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.shapeAttribute"></a>

- *Type:* str

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#shape_attribute GoogleOracleDatabaseExadbVmCluster#shape_attribute}

---

###### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#ssh_public_keys GoogleOracleDatabaseExadbVmCluster#ssh_public_keys}

---

###### `vm_file_system_storage`<sup>Required</sup> <a name="vm_file_system_storage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.vmFileSystemStorage"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#vm_file_system_storage GoogleOracleDatabaseExadbVmCluster#vm_file_system_storage}

---

###### `additional_ecpu_count_per_node`<sup>Optional</sup> <a name="additional_ecpu_count_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.additionalEcpuCountPerNode"></a>

- *Type:* typing.Union[int, float]

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.clusterName"></a>

- *Type:* str

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#cluster_name GoogleOracleDatabaseExadbVmCluster#cluster_name}

---

###### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#data_collection_options GoogleOracleDatabaseExadbVmCluster#data_collection_options}

---

###### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.licenseModel"></a>

- *Type:* str

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#license_model GoogleOracleDatabaseExadbVmCluster#license_model}

---

###### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.scanListenerPortTcp"></a>

- *Type:* typing.Union[int, float]

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#scan_listener_port_tcp GoogleOracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putProperties.parameter.timeZone"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#time_zone GoogleOracleDatabaseExadbVmCluster#time_zone}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#create GoogleOracleDatabaseExadbVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#delete GoogleOracleDatabaseExadbVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#update GoogleOracleDatabaseExadbVmCluster#update}.

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_odb_network` <a name="reset_odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetOdbNetwork"></a>

```python
def reset_odb_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleOracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOracleDatabaseExadbVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOracleDatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference">GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnetInput">backup_odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput">exadb_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetworkInput">odb_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnetInput">odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetwork">odb_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.properties"></a>

```python
properties: GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference">GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `backup_odb_subnet_input`<sup>Optional</sup> <a name="backup_odb_subnet_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnetInput"></a>

```python
backup_odb_subnet_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadb_vm_cluster_id_input`<sup>Optional</sup> <a name="exadb_vm_cluster_id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput"></a>

```python
exadb_vm_cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `odb_network_input`<sup>Optional</sup> <a name="odb_network_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetworkInput"></a>

```python
odb_network_input: str
```

- *Type:* str

---

##### `odb_subnet_input`<sup>Optional</sup> <a name="odb_subnet_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnetInput"></a>

```python
odb_subnet_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.propertiesInput"></a>

```python
properties_input: GoogleOracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleOracleDatabaseExadbVmClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.backupOdbSubnet"></a>

```python
backup_odb_subnet: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `odb_network`<sup>Required</sup> <a name="odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseExadbVmClusterConfig <a name="GoogleOracleDatabaseExadbVmClusterConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_odb_subnet: str,
  display_name: str,
  exadb_vm_cluster_id: str,
  location: str,
  odb_subnet: str,
  properties: GoogleOracleDatabaseExadbVmClusterProperties,
  deletion_protection: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  timeouts: GoogleOracleDatabaseExadbVmClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet"></a>

```python
backup_odb_subnet: str
```

- *Type:* str

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#backup_odb_subnet GoogleOracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#display_name GoogleOracleDatabaseExadbVmCluster#display_name}

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#exadb_vm_cluster_id GoogleOracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#location GoogleOracleDatabaseExadbVmCluster#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_subnet GoogleOracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.properties"></a>

```python
properties: GoogleOracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#properties GoogleOracleDatabaseExadbVmCluster#properties}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#deletion_protection GoogleOracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#labels GoogleOracleDatabaseExadbVmCluster#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#odb_network GoogleOracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#project GoogleOracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseExadbVmClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#timeouts GoogleOracleDatabaseExadbVmCluster#timeouts}

---

### GoogleOracleDatabaseExadbVmClusterProperties <a name="GoogleOracleDatabaseExadbVmClusterProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties(
  enabled_ecpu_count_per_node: typing.Union[int, float],
  exascale_db_storage_vault: str,
  grid_image_id: str,
  hostname_prefix: str,
  node_count: typing.Union[int, float],
  shape_attribute: str,
  ssh_public_keys: typing.List[str],
  vm_file_system_storage: GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage,
  additional_ecpu_count_per_node: typing.Union[int, float] = None,
  cluster_name: str = None,
  data_collection_options: GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions = None,
  license_model: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  time_zone: GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode">enabled_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault">exascale_db_storage_vault</a></code> | <code>str</code> | The name of ExascaleDbStorageVault associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.gridImageId">grid_image_id</a></code> | <code>str</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes/VMs in the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.shapeAttribute">shape_attribute</a></code> | <code>str</code> | The shape attribute of the VM cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | The SSH public keys for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage">vm_file_system_storage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | vm_file_system_storage block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode">additional_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.clusterName">cluster_name</a></code> | <code>str</code> | The cluster name for Exascale vm cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.licenseModel">license_model</a></code> | <code>str</code> | The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | SCAN listener port - TCP. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode"></a>

```python
enabled_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

##### `exascale_db_storage_vault`<sup>Required</sup> <a name="exascale_db_storage_vault" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault"></a>

```python
exascale_db_storage_vault: str
```

- *Type:* str

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#exascale_db_storage_vault GoogleOracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

##### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.gridImageId"></a>

```python
grid_image_id: str
```

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#grid_image_id GoogleOracleDatabaseExadbVmCluster#grid_image_id}

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#hostname_prefix GoogleOracleDatabaseExadbVmCluster#hostname_prefix}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#node_count GoogleOracleDatabaseExadbVmCluster#node_count}

---

##### `shape_attribute`<sup>Required</sup> <a name="shape_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.shapeAttribute"></a>

```python
shape_attribute: str
```

- *Type:* str

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#shape_attribute GoogleOracleDatabaseExadbVmCluster#shape_attribute}

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#ssh_public_keys GoogleOracleDatabaseExadbVmCluster#ssh_public_keys}

---

##### `vm_file_system_storage`<sup>Required</sup> <a name="vm_file_system_storage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage"></a>

```python
vm_file_system_storage: GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#vm_file_system_storage GoogleOracleDatabaseExadbVmCluster#vm_file_system_storage}

---

##### `additional_ecpu_count_per_node`<sup>Optional</sup> <a name="additional_ecpu_count_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode"></a>

```python
additional_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node GoogleOracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#cluster_name GoogleOracleDatabaseExadbVmCluster#cluster_name}

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions"></a>

```python
data_collection_options: GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#data_collection_options GoogleOracleDatabaseExadbVmCluster#data_collection_options}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#license_model GoogleOracleDatabaseExadbVmCluster#license_model}

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#scan_listener_port_tcp GoogleOracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties.property.timeZone"></a>

```python
time_zone: GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#time_zone GoogleOracleDatabaseExadbVmCluster#time_zone}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions <a name="GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_health_monitoring_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable health monitoring. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled GoogleOracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_health_monitoring_enabled GoogleOracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_incident_logs_enabled GoogleOracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone <a name="GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone(
  id: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.id">id</a></code> | <code>str</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.version">version</a></code> | <code>str</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.id"></a>

```python
id: str
```

- *Type:* str

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone.property.version"></a>

```python
version: str
```

- *Type:* str

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#version GoogleOracleDatabaseExadbVmCluster#version}

---

### GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage <a name="GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage(
  size_in_gbs_per_node: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode">size_in_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | The storage allocation for the exadbvmcluster per node, in gigabytes (GB). |

---

##### `size_in_gbs_per_node`<sup>Required</sup> <a name="size_in_gbs_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode"></a>

```python
size_in_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#size_in_gbs_per_node GoogleOracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

### GoogleOracleDatabaseExadbVmClusterTimeouts <a name="GoogleOracleDatabaseExadbVmClusterTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#create GoogleOracleDatabaseExadbVmCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#delete GoogleOracleDatabaseExadbVmCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#update GoogleOracleDatabaseExadbVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#create GoogleOracleDatabaseExadbVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#delete GoogleOracleDatabaseExadbVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#update GoogleOracleDatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone">put_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage">put_vm_file_system_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode">reset_additional_ecpu_count_per_node</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp">reset_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_collection_options` <a name="put_data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_health_monitoring_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled GoogleOracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_health_monitoring_enabled GoogleOracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#is_incident_logs_enabled GoogleOracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

##### `put_time_zone` <a name="put_time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone"></a>

```python
def put_time_zone(
  id: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.id"></a>

- *Type:* str

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#id GoogleOracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.version"></a>

- *Type:* str

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#version GoogleOracleDatabaseExadbVmCluster#version}

---

##### `put_vm_file_system_storage` <a name="put_vm_file_system_storage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage"></a>

```python
def put_vm_file_system_storage(
  size_in_gbs_per_node: typing.Union[int, float]
) -> None
```

###### `size_in_gbs_per_node`<sup>Required</sup> <a name="size_in_gbs_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage.parameter.sizeInGbsPerNode"></a>

- *Type:* typing.Union[int, float]

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_oracle_database_exadb_vm_cluster#size_in_gbs_per_node GoogleOracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

##### `reset_additional_ecpu_count_per_node` <a name="reset_additional_ecpu_count_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode"></a>

```python
def reset_additional_ecpu_count_per_node() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_scan_listener_port_tcp` <a name="reset_scan_listener_port_tcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp"></a>

```python
def reset_scan_listener_port_tcp() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri">oci_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage">vm_file_system_storage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput">additional_ecpu_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput">enabled_ecpu_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput">exascale_db_storage_vault_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput">grid_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput">hostname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput">shape_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput">vm_file_system_storage_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode">additional_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode">enabled_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault">exascale_db_storage_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId">grid_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute">shape_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions"></a>

```python
data_collection_options: GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a>

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oci_uri`<sup>Required</sup> <a name="oci_uri" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri"></a>

```python
oci_uri: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `vm_file_system_storage`<sup>Required</sup> <a name="vm_file_system_storage" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage"></a>

```python
vm_file_system_storage: GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a>

---

##### `additional_ecpu_count_per_node_input`<sup>Optional</sup> <a name="additional_ecpu_count_per_node_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput"></a>

```python
additional_ecpu_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">GoogleOracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `enabled_ecpu_count_per_node_input`<sup>Optional</sup> <a name="enabled_ecpu_count_per_node_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```python
enabled_ecpu_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exascale_db_storage_vault_input`<sup>Optional</sup> <a name="exascale_db_storage_vault_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput"></a>

```python
exascale_db_storage_vault_input: str
```

- *Type:* str

---

##### `grid_image_id_input`<sup>Optional</sup> <a name="grid_image_id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput"></a>

```python
grid_image_id_input: str
```

- *Type:* str

---

##### `hostname_prefix_input`<sup>Optional</sup> <a name="hostname_prefix_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```python
hostname_prefix_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_attribute_input`<sup>Optional</sup> <a name="shape_attribute_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput"></a>

```python
shape_attribute_input: str
```

- *Type:* str

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `vm_file_system_storage_input`<sup>Optional</sup> <a name="vm_file_system_storage_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput"></a>

```python
vm_file_system_storage_input: GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `additional_ecpu_count_per_node`<sup>Required</sup> <a name="additional_ecpu_count_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode"></a>

```python
additional_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode"></a>

```python
enabled_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exascale_db_storage_vault`<sup>Required</sup> <a name="exascale_db_storage_vault" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault"></a>

```python
exascale_db_storage_vault: str
```

- *Type:* str

---

##### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId"></a>

```python
grid_image_id: str
```

- *Type:* str

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_attribute`<sup>Required</sup> <a name="shape_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute"></a>

```python
shape_attribute: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterProperties">GoogleOracleDatabaseExadbVmClusterProperties</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone">GoogleOracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---


### GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference <a name="GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput">size_in_gbs_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode">size_in_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_in_gbs_per_node_input`<sup>Optional</sup> <a name="size_in_gbs_per_node_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput"></a>

```python
size_in_gbs_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gbs_per_node`<sup>Required</sup> <a name="size_in_gbs_per_node" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode"></a>

```python
size_in_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">GoogleOracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---


### GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference <a name="GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_exadb_vm_cluster

googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleOracleDatabaseExadbVmClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExadbVmCluster.GoogleOracleDatabaseExadbVmClusterTimeouts">GoogleOracleDatabaseExadbVmClusterTimeouts</a>

---



