# `googleConfigDeployment` Submodule <a name="`googleConfigDeployment` Submodule" id="@cdktn/provider-google-beta.googleConfigDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleConfigDeployment <a name="GoogleConfigDeployment" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeployment;

GoogleConfigDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .serviceAccount(java.lang.String)
    .terraformBlueprint(GoogleConfigDeploymentTerraformBlueprint)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .artifactsGcsBucket(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .importExistingResources(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .quotaValidation(java.lang.String)
//  .tfVersionConstraint(java.lang.String)
//  .timeouts(GoogleConfigDeploymentTimeouts)
//  .workerPool(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>java.lang.String</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.quotaValidation">quotaValidation</a></code> | <code>java.lang.String</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.tfVersionConstraint">tfVersionConstraint</a></code> | <code>java.lang.String</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.workerPool">workerPool</a></code> | <code>java.lang.String</code> | Custom Cloud Build worker pool resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#location GoogleConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#name GoogleConfigDeployment#name}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#service_account GoogleConfigDeployment#service_account}

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.terraformBlueprint"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#terraform_blueprint GoogleConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#annotations GoogleConfigDeployment#annotations}

---

##### `artifactsGcsBucket`<sup>Optional</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.artifactsGcsBucket"></a>

- *Type:* java.lang.String

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#artifacts_gcs_bucket GoogleConfigDeployment#artifacts_gcs_bucket}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#deletion_policy GoogleConfigDeployment#deletion_policy}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#force_destroy GoogleConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.importExistingResources"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#import_existing_resources GoogleConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#labels GoogleConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}.

---

##### `quotaValidation`<sup>Optional</sup> <a name="quotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.quotaValidation"></a>

- *Type:* java.lang.String

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#quota_validation GoogleConfigDeployment#quota_validation}

---

##### `tfVersionConstraint`<sup>Optional</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.tfVersionConstraint"></a>

- *Type:* java.lang.String

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#tf_version_constraint GoogleConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#timeouts GoogleConfigDeployment#timeouts}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.workerPool"></a>

- *Type:* java.lang.String

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#worker_pool GoogleConfigDeployment#worker_pool}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint">putTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket">resetArtifactsGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources">resetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation">resetQuotaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint">resetTfVersionConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerraformBlueprint` <a name="putTerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint"></a>

```java
public void putTerraformBlueprint(GoogleConfigDeploymentTerraformBlueprint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleConfigDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetArtifactsGcsBucket` <a name="resetArtifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket"></a>

```java
public void resetArtifactsGcsBucket()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetImportExistingResources` <a name="resetImportExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources"></a>

```java
public void resetImportExistingResources()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetQuotaValidation` <a name="resetQuotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation"></a>

```java
public void resetQuotaValidation()
```

##### `resetTfVersionConstraint` <a name="resetTfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint"></a>

```java
public void resetTfVersionConstraint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool"></a>

```java
public void resetWorkerPool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeployment;

GoogleConfigDeployment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeployment;

GoogleConfigDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeployment;

GoogleConfigDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeployment;

GoogleConfigDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleConfigDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleConfigDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision">latestRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput">artifactsGcsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput">importExistingResourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput">quotaValidationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput">terraformBlueprintInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput">tfVersionConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput">workerPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation">quotaValidation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint">tfVersionConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision"></a>

```java
public java.lang.String getLatestRevision();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint"></a>

```java
public GoogleConfigDeploymentTerraformBlueprintOutputReference getTerraformBlueprint();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts"></a>

```java
public GoogleConfigDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `artifactsGcsBucketInput`<sup>Optional</sup> <a name="artifactsGcsBucketInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput"></a>

```java
public java.lang.String getArtifactsGcsBucketInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importExistingResourcesInput`<sup>Optional</sup> <a name="importExistingResourcesInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `quotaValidationInput`<sup>Optional</sup> <a name="quotaValidationInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput"></a>

```java
public java.lang.String getQuotaValidationInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `terraformBlueprintInput`<sup>Optional</sup> <a name="terraformBlueprintInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput"></a>

```java
public GoogleConfigDeploymentTerraformBlueprint getTerraformBlueprintInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---

##### `tfVersionConstraintInput`<sup>Optional</sup> <a name="tfVersionConstraintInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput"></a>

```java
public java.lang.String getTfVersionConstraintInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleConfigDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput"></a>

```java
public java.lang.String getWorkerPoolInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `artifactsGcsBucket`<sup>Required</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket"></a>

```java
public java.lang.String getArtifactsGcsBucket();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importExistingResources`<sup>Required</sup> <a name="importExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `quotaValidation`<sup>Required</sup> <a name="quotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation"></a>

```java
public java.lang.String getQuotaValidation();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `tfVersionConstraint`<sup>Required</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint"></a>

```java
public java.lang.String getTfVersionConstraint();
```

- *Type:* java.lang.String

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleConfigDeploymentConfig <a name="GoogleConfigDeploymentConfig" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentConfig;

GoogleConfigDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .serviceAccount(java.lang.String)
    .terraformBlueprint(GoogleConfigDeploymentTerraformBlueprint)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .artifactsGcsBucket(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .importExistingResources(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .quotaValidation(java.lang.String)
//  .tfVersionConstraint(java.lang.String)
//  .timeouts(GoogleConfigDeploymentTimeouts)
//  .workerPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>java.lang.String</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation">quotaValidation</a></code> | <code>java.lang.String</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint">tfVersionConstraint</a></code> | <code>java.lang.String</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | Custom Cloud Build worker pool resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#location GoogleConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#name GoogleConfigDeployment#name}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#service_account GoogleConfigDeployment#service_account}

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint"></a>

```java
public GoogleConfigDeploymentTerraformBlueprint getTerraformBlueprint();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#terraform_blueprint GoogleConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#annotations GoogleConfigDeployment#annotations}

---

##### `artifactsGcsBucket`<sup>Optional</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```java
public java.lang.String getArtifactsGcsBucket();
```

- *Type:* java.lang.String

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#artifacts_gcs_bucket GoogleConfigDeployment#artifacts_gcs_bucket}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#deletion_policy GoogleConfigDeployment#deletion_policy}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#force_destroy GoogleConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#import_existing_resources GoogleConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#labels GoogleConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}.

---

##### `quotaValidation`<sup>Optional</sup> <a name="quotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation"></a>

```java
public java.lang.String getQuotaValidation();
```

- *Type:* java.lang.String

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#quota_validation GoogleConfigDeployment#quota_validation}

---

##### `tfVersionConstraint`<sup>Optional</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint"></a>

```java
public java.lang.String getTfVersionConstraint();
```

- *Type:* java.lang.String

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#tf_version_constraint GoogleConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts"></a>

```java
public GoogleConfigDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#timeouts GoogleConfigDeployment#timeouts}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#worker_pool GoogleConfigDeployment#worker_pool}

---

### GoogleConfigDeploymentTerraformBlueprint <a name="GoogleConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTerraformBlueprint;

GoogleConfigDeploymentTerraformBlueprint.builder()
//  .gcsSource(java.lang.String)
//  .gitSource(GoogleConfigDeploymentTerraformBlueprintGitSource)
//  .inputValues(IResolvable|java.util.List<GoogleConfigDeploymentTerraformBlueprintInputValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource">gcsSource</a></code> | <code>java.lang.String</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues">inputValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>></code> | input_values block. |

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```java
public java.lang.String getGcsSource();
```

- *Type:* java.lang.String

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#gcs_source GoogleConfigDeployment#gcs_source}

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```java
public GoogleConfigDeploymentTerraformBlueprintGitSource getGitSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#git_source GoogleConfigDeployment#git_source}

---

##### `inputValues`<sup>Optional</sup> <a name="inputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```java
public IResolvable|java.util.List<GoogleConfigDeploymentTerraformBlueprintInputValues> getInputValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>>

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#input_values GoogleConfigDeployment#input_values}

---

### GoogleConfigDeploymentTerraformBlueprintGitSource <a name="GoogleConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTerraformBlueprintGitSource;

GoogleConfigDeploymentTerraformBlueprintGitSource.builder()
    .repo(java.lang.String)
//  .directory(java.lang.String)
//  .ref(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo">repo</a></code> | <code>java.lang.String</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory">directory</a></code> | <code>java.lang.String</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref">ref</a></code> | <code>java.lang.String</code> | Git reference (branch or tag). |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#repo GoogleConfigDeployment#repo}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#directory GoogleConfigDeployment#directory}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#ref GoogleConfigDeployment#ref}

---

### GoogleConfigDeploymentTerraformBlueprintInputValues <a name="GoogleConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTerraformBlueprintInputValues;

GoogleConfigDeploymentTerraformBlueprintInputValues.builder()
    .inputValue(java.lang.String)
    .variableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue">inputValue</a></code> | <code>java.lang.String</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName">variableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}. |

---

##### `inputValue`<sup>Required</sup> <a name="inputValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```java
public java.lang.String getInputValue();
```

- *Type:* java.lang.String

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#input_value GoogleConfigDeployment#input_value}

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```java
public java.lang.String getVariableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}.

---

### GoogleConfigDeploymentTimeouts <a name="GoogleConfigDeploymentTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTimeouts;

GoogleConfigDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference;

new GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```java
public void resetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```java
public GoogleConfigDeploymentTerraformBlueprintGitSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesList <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList;

new GoogleConfigDeploymentTerraformBlueprintInputValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```java
public GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleConfigDeploymentTerraformBlueprintInputValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>>

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference;

new GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">inputValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">variableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">inputValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">variableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputValueInput`<sup>Optional</sup> <a name="inputValueInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```java
public java.lang.String getInputValueInput();
```

- *Type:* java.lang.String

---

##### `variableNameInput`<sup>Optional</sup> <a name="variableNameInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```java
public java.lang.String getVariableNameInput();
```

- *Type:* java.lang.String

---

##### `inputValue`<sup>Required</sup> <a name="inputValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```java
public java.lang.String getInputValue();
```

- *Type:* java.lang.String

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```java
public java.lang.String getVariableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleConfigDeploymentTerraformBlueprintInputValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>

---


### GoogleConfigDeploymentTerraformBlueprintOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTerraformBlueprintOutputReference;

new GoogleConfigDeploymentTerraformBlueprintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues">putInputValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">resetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">resetInputValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```java
public void putGitSource(GoogleConfigDeploymentTerraformBlueprintGitSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `putInputValues` <a name="putInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```java
public void putInputValues(IResolvable|java.util.List<GoogleConfigDeploymentTerraformBlueprintInputValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>>

---

##### `resetGcsSource` <a name="resetGcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```java
public void resetGcsSource()
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```java
public void resetGitSource()
```

##### `resetInputValues` <a name="resetInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```java
public void resetInputValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">inputValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">gcsSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">inputValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">gcsSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```java
public GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference getGitSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `inputValues`<sup>Required</sup> <a name="inputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```java
public GoogleConfigDeploymentTerraformBlueprintInputValuesList getInputValues();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `gcsSourceInput`<sup>Optional</sup> <a name="gcsSourceInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```java
public java.lang.String getGcsSourceInput();
```

- *Type:* java.lang.String

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```java
public GoogleConfigDeploymentTerraformBlueprintGitSource getGitSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `inputValuesInput`<sup>Optional</sup> <a name="inputValuesInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```java
public IResolvable|java.util.List<GoogleConfigDeploymentTerraformBlueprintInputValues> getInputValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues">GoogleConfigDeploymentTerraformBlueprintInputValues</a>>

---

##### `gcsSource`<sup>Required</sup> <a name="gcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```java
public java.lang.String getGcsSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```java
public GoogleConfigDeploymentTerraformBlueprint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---


### GoogleConfigDeploymentTimeoutsOutputReference <a name="GoogleConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_config_deployment.GoogleConfigDeploymentTimeoutsOutputReference;

new GoogleConfigDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleConfigDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---



