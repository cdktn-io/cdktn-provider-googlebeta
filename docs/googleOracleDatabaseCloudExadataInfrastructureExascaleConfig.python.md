# `googleOracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule <a name="`googleOracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config google_oracle_database_cloud_exadata_infrastructure_exascale_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_exadata_infrastructure: str,
  location: str,
  total_storage_size_gb: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.cloudExadataInfrastructure">cloud_exadata_infrastructure</a></code> | <code>str</code> | A reference to CloudExadataInfrastructure resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#location GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.totalStorageSizeGb">total_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | The total storage to be allocated to Exascale in GBs. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#id GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#project GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_exadata_infrastructure`<sup>Required</sup> <a name="cloud_exadata_infrastructure" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.cloudExadataInfrastructure"></a>

- *Type:* str

A reference to CloudExadataInfrastructure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#cloud_exadata_infrastructure GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#cloud_exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#location GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#location}.

---

##### `total_storage_size_gb`<sup>Required</sup> <a name="total_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.totalStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

The total storage to be allocated to Exascale in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#total_storage_size_gb GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#total_storage_size_gb}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#deletion_policy GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#id GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#project GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#timeouts GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#create GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#delete GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput">cloud_exadata_infrastructure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput">total_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure">cloud_exadata_infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb">total_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a>

---

##### `cloud_exadata_infrastructure_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput"></a>

```python
cloud_exadata_infrastructure_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---

##### `total_storage_size_gb_input`<sup>Optional</sup> <a name="total_storage_size_gb_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput"></a>

```python
total_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_exadata_infrastructure`<sup>Required</sup> <a name="cloud_exadata_infrastructure" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure"></a>

```python
cloud_exadata_infrastructure: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `total_storage_size_gb`<sup>Required</sup> <a name="total_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb"></a>

```python
total_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_exadata_infrastructure: str,
  location: str,
  total_storage_size_gb: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure">cloud_exadata_infrastructure</a></code> | <code>str</code> | A reference to CloudExadataInfrastructure resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#location GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb">total_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | The total storage to be allocated to Exascale in GBs. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#id GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#project GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_exadata_infrastructure`<sup>Required</sup> <a name="cloud_exadata_infrastructure" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure"></a>

```python
cloud_exadata_infrastructure: str
```

- *Type:* str

A reference to CloudExadataInfrastructure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#cloud_exadata_infrastructure GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#cloud_exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#location GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#location}.

---

##### `total_storage_size_gb`<sup>Required</sup> <a name="total_storage_size_gb" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb"></a>

```python
total_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total storage to be allocated to Exascale in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#total_storage_size_gb GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#total_storage_size_gb}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#deletion_policy GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#id GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#project GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#timeouts GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#timeouts}

---

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#create GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#delete GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#create GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure_exascale_config#delete GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure_exascale_config

googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructureExascaleConfig.GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---



