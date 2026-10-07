# `googleBigqueryDataTransferDataSourceEnrollment` Submodule <a name="`googleBigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollment <a name="GoogleBigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_source_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts = None,
  unenroll_location: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.unenrollLocation">unenroll_location</a></code> | <code>str</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dataSourceId"></a>

- *Type:* str

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#data_source_id GoogleBigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#deletion_policy GoogleBigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#timeouts GoogleBigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenroll_location`<sup>Optional</sup> <a name="unenroll_location" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.unenrollLocation"></a>

- *Type:* str

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#unenroll_location GoogleBigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">reset_unenroll_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unenroll_location` <a name="reset_unenroll_location" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```python
def reset_unenroll_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryDataTransferDataSourceEnrollment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">data_refresh_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">default_data_refresh_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">default_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl">help_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">manual_runs_disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">minimum_schedule_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">supports_custom_schedule</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">update_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">unenroll_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">unenroll_location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `data_refresh_type`<sup>Required</sup> <a name="data_refresh_type" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```python
data_refresh_type: str
```

- *Type:* str

---

##### `default_data_refresh_window_days`<sup>Required</sup> <a name="default_data_refresh_window_days" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```python
default_data_refresh_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_schedule`<sup>Required</sup> <a name="default_schedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```python
default_schedule: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `help_url`<sup>Required</sup> <a name="help_url" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```python
help_url: str
```

- *Type:* str

---

##### `manual_runs_disabled`<sup>Required</sup> <a name="manual_runs_disabled" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```python
manual_runs_disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `minimum_schedule_interval`<sup>Required</sup> <a name="minimum_schedule_interval" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```python
minimum_schedule_interval: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```python
parameters: GoogleBigqueryDataTransferDataSourceEnrollmentParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supports_custom_schedule`<sup>Required</sup> <a name="supports_custom_schedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```python
supports_custom_schedule: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `update_deadline_seconds`<sup>Required</sup> <a name="update_deadline_seconds" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```python
update_deadline_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `unenroll_location_input`<sup>Optional</sup> <a name="unenroll_location_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```python
unenroll_location_input: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `unenroll_location`<sup>Required</sup> <a name="unenroll_location" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```python
unenroll_location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentConfig <a name="GoogleBigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_source_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts = None,
  unenroll_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">unenroll_location</a></code> | <code>str</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#data_source_id GoogleBigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#deletion_policy GoogleBigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#timeouts GoogleBigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenroll_location`<sup>Optional</sup> <a name="unenroll_location" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```python
unenroll_location: str
```

- *Type:* str

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#unenroll_location GoogleBigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### GoogleBigqueryDataTransferDataSourceEnrollmentParameters <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters()
```


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentParametersList <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">deprecated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">immutable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">max_list_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">param_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">validation_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">validation_help_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">validation_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```python
deprecated: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `immutable`<sup>Required</sup> <a name="immutable" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```python
immutable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_list_size`<sup>Required</sup> <a name="max_list_size" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```python
max_list_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `param_id`<sup>Required</sup> <a name="param_id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```python
param_id: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validation_description`<sup>Required</sup> <a name="validation_description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```python
validation_description: str
```

- *Type:* str

---

##### `validation_help_url`<sup>Required</sup> <a name="validation_help_url" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```python
validation_help_url: str
```

- *Type:* str

---

##### `validation_regex`<sup>Required</sup> <a name="validation_regex" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```python
validation_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDataTransferDataSourceEnrollmentParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_bigquery_data_transfer_data_source_enrollment

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---



