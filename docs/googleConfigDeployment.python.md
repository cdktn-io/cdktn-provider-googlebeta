# `googleConfigDeployment` Submodule <a name="`googleConfigDeployment` Submodule" id="@cdktn/provider-google-beta.googleConfigDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleConfigDeployment <a name="GoogleConfigDeployment" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeployment(
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
  name: str,
  service_account: str,
  terraform_blueprint: GoogleConfigDeploymentTerraformBlueprint,
  annotations: typing.Mapping[str] = None,
  artifacts_gcs_bucket: str = None,
  deletion_policy: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  import_existing_resources: bool | IResolvable = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  quota_validation: str = None,
  tf_version_constraint: str = None,
  timeouts: GoogleConfigDeploymentTimeouts = None,
  worker_pool: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.terraformBlueprint">terraform_blueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.artifactsGcsBucket">artifacts_gcs_bucket</a></code> | <code>str</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.quotaValidation">quota_validation</a></code> | <code>str</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.tfVersionConstraint">tf_version_constraint</a></code> | <code>str</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.workerPool">worker_pool</a></code> | <code>str</code> | Custom Cloud Build worker pool resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#location GoogleConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.name"></a>

- *Type:* str

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#name GoogleConfigDeployment#name}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#service_account GoogleConfigDeployment#service_account}

---

##### `terraform_blueprint`<sup>Required</sup> <a name="terraform_blueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.terraformBlueprint"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#terraform_blueprint GoogleConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#annotations GoogleConfigDeployment#annotations}

---

##### `artifacts_gcs_bucket`<sup>Optional</sup> <a name="artifacts_gcs_bucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.artifactsGcsBucket"></a>

- *Type:* str

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#artifacts_gcs_bucket GoogleConfigDeployment#artifacts_gcs_bucket}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#deletion_policy GoogleConfigDeployment#deletion_policy}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#force_destroy GoogleConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_existing_resources`<sup>Optional</sup> <a name="import_existing_resources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.importExistingResources"></a>

- *Type:* bool | cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#import_existing_resources GoogleConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#labels GoogleConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}.

---

##### `quota_validation`<sup>Optional</sup> <a name="quota_validation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.quotaValidation"></a>

- *Type:* str

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#quota_validation GoogleConfigDeployment#quota_validation}

---

##### `tf_version_constraint`<sup>Optional</sup> <a name="tf_version_constraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.tfVersionConstraint"></a>

- *Type:* str

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#tf_version_constraint GoogleConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#timeouts GoogleConfigDeployment#timeouts}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.workerPool"></a>

- *Type:* str

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#worker_pool GoogleConfigDeployment#worker_pool}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint">put_terraform_blueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket">reset_artifacts_gcs_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources">reset_import_existing_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation">reset_quota_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint">reset_tf_version_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool">reset_worker_pool</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_terraform_blueprint` <a name="put_terraform_blueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint"></a>

```python
def put_terraform_blueprint(
  gcs_source: str = None,
  git_source: GoogleConfigDeploymentTerraformBlueprintGitSource = None,
  input_values: IResolvable | typing.List[GoogleConfigDeploymentTerraformBlueprintInputValues] = None
) -> None
```

###### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint.parameter.gcsSource"></a>

- *Type:* str

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#gcs_source GoogleConfigDeployment#gcs_source}

---

###### `git_source`<sup>Optional</sup> <a name="git_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint.parameter.gitSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#git_source GoogleConfigDeployment#git_source}

---

###### `input_values`<sup>Optional</sup> <a name="input_values" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint.parameter.inputValues"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#input_values GoogleConfigDeployment#input_values}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_artifacts_gcs_bucket` <a name="reset_artifacts_gcs_bucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket"></a>

```python
def reset_artifacts_gcs_bucket() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_existing_resources` <a name="reset_import_existing_resources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources"></a>

```python
def reset_import_existing_resources() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_quota_validation` <a name="reset_quota_validation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation"></a>

```python
def reset_quota_validation() -> None
```

##### `reset_tf_version_constraint` <a name="reset_tf_version_constraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint"></a>

```python
def reset_tf_version_constraint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_worker_pool` <a name="reset_worker_pool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool"></a>

```python
def reset_worker_pool() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleConfigDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision">latest_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint">terraform_blueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput">artifacts_gcs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput">import_existing_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput">quota_validation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput">terraform_blueprint_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput">tf_version_constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput">worker_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket">artifacts_gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation">quota_validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint">tf_version_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `latest_revision`<sup>Required</sup> <a name="latest_revision" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision"></a>

```python
latest_revision: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_blueprint`<sup>Required</sup> <a name="terraform_blueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint"></a>

```python
terraform_blueprint: GoogleConfigDeploymentTerraformBlueprintOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts"></a>

```python
timeouts: GoogleConfigDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `artifacts_gcs_bucket_input`<sup>Optional</sup> <a name="artifacts_gcs_bucket_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput"></a>

```python
artifacts_gcs_bucket_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_existing_resources_input`<sup>Optional</sup> <a name="import_existing_resources_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput"></a>

```python
import_existing_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `quota_validation_input`<sup>Optional</sup> <a name="quota_validation_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput"></a>

```python
quota_validation_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `terraform_blueprint_input`<sup>Optional</sup> <a name="terraform_blueprint_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput"></a>

```python
terraform_blueprint_input: GoogleConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---

##### `tf_version_constraint_input`<sup>Optional</sup> <a name="tf_version_constraint_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput"></a>

```python
tf_version_constraint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleConfigDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---

##### `worker_pool_input`<sup>Optional</sup> <a name="worker_pool_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput"></a>

```python
worker_pool_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `artifacts_gcs_bucket`<sup>Required</sup> <a name="artifacts_gcs_bucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket"></a>

```python
artifacts_gcs_bucket: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_existing_resources`<sup>Required</sup> <a name="import_existing_resources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources"></a>

```python
import_existing_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `quota_validation`<sup>Required</sup> <a name="quota_validation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation"></a>

```python
quota_validation: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `tf_version_constraint`<sup>Required</sup> <a name="tf_version_constraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint"></a>

```python
tf_version_constraint: str
```

- *Type:* str

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleConfigDeploymentConfig <a name="GoogleConfigDeploymentConfig" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  service_account: str,
  terraform_blueprint: GoogleConfigDeploymentTerraformBlueprint,
  annotations: typing.Mapping[str] = None,
  artifacts_gcs_bucket: str = None,
  deletion_policy: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  import_existing_resources: bool | IResolvable = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  quota_validation: str = None,
  tf_version_constraint: str = None,
  timeouts: GoogleConfigDeploymentTimeouts = None,
  worker_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name">name</a></code> | <code>str</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint">terraform_blueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket">artifacts_gcs_bucket</a></code> | <code>str</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation">quota_validation</a></code> | <code>str</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint">tf_version_constraint</a></code> | <code>str</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool">worker_pool</a></code> | <code>str</code> | Custom Cloud Build worker pool resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#location GoogleConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#name GoogleConfigDeployment#name}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#service_account GoogleConfigDeployment#service_account}

---

##### `terraform_blueprint`<sup>Required</sup> <a name="terraform_blueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint"></a>

```python
terraform_blueprint: GoogleConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#terraform_blueprint GoogleConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#annotations GoogleConfigDeployment#annotations}

---

##### `artifacts_gcs_bucket`<sup>Optional</sup> <a name="artifacts_gcs_bucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```python
artifacts_gcs_bucket: str
```

- *Type:* str

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#artifacts_gcs_bucket GoogleConfigDeployment#artifacts_gcs_bucket}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#deletion_policy GoogleConfigDeployment#deletion_policy}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#force_destroy GoogleConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_existing_resources`<sup>Optional</sup> <a name="import_existing_resources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources"></a>

```python
import_existing_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#import_existing_resources GoogleConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#labels GoogleConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}.

---

##### `quota_validation`<sup>Optional</sup> <a name="quota_validation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation"></a>

```python
quota_validation: str
```

- *Type:* str

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#quota_validation GoogleConfigDeployment#quota_validation}

---

##### `tf_version_constraint`<sup>Optional</sup> <a name="tf_version_constraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint"></a>

```python
tf_version_constraint: str
```

- *Type:* str

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#tf_version_constraint GoogleConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleConfigDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#timeouts GoogleConfigDeployment#timeouts}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#worker_pool GoogleConfigDeployment#worker_pool}

---

### GoogleConfigDeploymentTerraformBlueprint <a name="GoogleConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint(
  gcs_source: str = None,
  git_source: GoogleConfigDeploymentTerraformBlueprintGitSource = None,
  input_values: IResolvable | typing.List[GoogleConfigDeploymentTerraformBlueprintInputValues] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource">gcs_source</a></code> | <code>str</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues">input_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]</code> | input_values block. |

---

##### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```python
gcs_source: str
```

- *Type:* str

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#gcs_source GoogleConfigDeployment#gcs_source}

---

##### `git_source`<sup>Optional</sup> <a name="git_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```python
git_source: GoogleConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#git_source GoogleConfigDeployment#git_source}

---

##### `input_values`<sup>Optional</sup> <a name="input_values" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```python
input_values: IResolvable | typing.List[GoogleConfigDeploymentTerraformBlueprintInputValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#input_values GoogleConfigDeployment#input_values}

---

### GoogleConfigDeploymentTerraformBlueprintGitSource <a name="GoogleConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource(
  repo: str,
  directory: str = None,
  ref: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo">repo</a></code> | <code>str</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory">directory</a></code> | <code>str</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref">ref</a></code> | <code>str</code> | Git reference (branch or tag). |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```python
repo: str
```

- *Type:* str

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#repo GoogleConfigDeployment#repo}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```python
directory: str
```

- *Type:* str

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#directory GoogleConfigDeployment#directory}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```python
ref: str
```

- *Type:* str

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#ref GoogleConfigDeployment#ref}

---

### GoogleConfigDeploymentTerraformBlueprintInputValues <a name="GoogleConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues(
  input_value: str,
  variable_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue">input_value</a></code> | <code>str</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName">variable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}. |

---

##### `input_value`<sup>Required</sup> <a name="input_value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```python
input_value: str
```

- *Type:* str

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#input_value GoogleConfigDeployment#input_value}

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}.

---

### GoogleConfigDeploymentTimeouts <a name="GoogleConfigDeploymentTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">reset_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory` <a name="reset_directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesList <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleConfigDeploymentTerraformBlueprintInputValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">input_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">input_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_value_input`<sup>Optional</sup> <a name="input_value_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```python
input_value_input: str
```

- *Type:* str

---

##### `variable_name_input`<sup>Optional</sup> <a name="variable_name_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```python
variable_name_input: str
```

- *Type:* str

---

##### `input_value`<sup>Required</sup> <a name="input_value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```python
input_value: str
```

- *Type:* str

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleConfigDeploymentTerraformBlueprintInputValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>

---


### GoogleConfigDeploymentTerraformBlueprintOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource">put_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues">put_input_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">reset_gcs_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">reset_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">reset_input_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git_source` <a name="put_git_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```python
def put_git_source(
  repo: str,
  directory: str = None,
  ref: str = None
) -> None
```

###### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.repo"></a>

- *Type:* str

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#repo GoogleConfigDeployment#repo}

---

###### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.directory"></a>

- *Type:* str

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#directory GoogleConfigDeployment#directory}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.ref"></a>

- *Type:* str

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_config_deployment#ref GoogleConfigDeployment#ref}

---

##### `put_input_values` <a name="put_input_values" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```python
def put_input_values(
  value: IResolvable | typing.List[GoogleConfigDeploymentTerraformBlueprintInputValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]

---

##### `reset_gcs_source` <a name="reset_gcs_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```python
def reset_gcs_source() -> None
```

##### `reset_git_source` <a name="reset_git_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```python
def reset_git_source() -> None
```

##### `reset_input_values` <a name="reset_input_values" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```python
def reset_input_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">input_values</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">gcs_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">git_source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">input_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">gcs_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_source`<sup>Required</sup> <a name="git_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```python
git_source: GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `input_values`<sup>Required</sup> <a name="input_values" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```python
input_values: GoogleConfigDeploymentTerraformBlueprintInputValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `gcs_source_input`<sup>Optional</sup> <a name="gcs_source_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```python
gcs_source_input: str
```

- *Type:* str

---

##### `git_source_input`<sup>Optional</sup> <a name="git_source_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```python
git_source_input: GoogleConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `input_values_input`<sup>Optional</sup> <a name="input_values_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```python
input_values_input: IResolvable | typing.List[GoogleConfigDeploymentTerraformBlueprintInputValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>]

---

##### `gcs_source`<sup>Required</sup> <a name="gcs_source" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```python
gcs_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```python
internal_value: GoogleConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---


### GoogleConfigDeploymentTimeoutsOutputReference <a name="GoogleConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_config_deployment

googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleConfigDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---



