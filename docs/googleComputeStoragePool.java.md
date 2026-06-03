# `googleComputeStoragePool` Submodule <a name="`googleComputeStoragePool` Submodule" id="@cdktn/provider-google-beta.googleComputeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeStoragePool <a name="GoogleComputeStoragePool" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePool;

GoogleComputeStoragePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .poolProvisionedCapacityGb(java.lang.String)
    .poolProvisionedThroughput(java.lang.String)
    .storagePoolType(java.lang.String)
//  .capacityProvisioningType(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .params(GoogleComputeStoragePoolParams)
//  .performanceProvisioningType(java.lang.String)
//  .poolProvisionedIops(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeStoragePoolTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>java.lang.String</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>java.lang.String</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.capacityProvisioningType">capacityProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this storage pool. These can be later modified by the setLabels method. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.performanceProvisioningType">performanceProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedIops">poolProvisionedIops</a></code> | <code>java.lang.String</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the storage pool resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#name GoogleComputeStoragePool#name}

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb"></a>

- *Type:* java.lang.String

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#pool_provisioned_capacity_gb GoogleComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedThroughput"></a>

- *Type:* java.lang.String

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#pool_provisioned_throughput GoogleComputeStoragePool#pool_provisioned_throughput}

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.storagePoolType"></a>

- *Type:* java.lang.String

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#storage_pool_type GoogleComputeStoragePool#storage_pool_type}

---

##### `capacityProvisioningType`<sup>Optional</sup> <a name="capacityProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.capacityProvisioningType"></a>

- *Type:* java.lang.String

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#capacity_provisioning_type GoogleComputeStoragePool#capacity_provisioning_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#deletion_policy GoogleComputeStoragePool#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#deletion_protection GoogleComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#description GoogleComputeStoragePool#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this storage pool. These can be later modified by the setLabels method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#labels GoogleComputeStoragePool#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#params GoogleComputeStoragePool#params}

---

##### `performanceProvisioningType`<sup>Optional</sup> <a name="performanceProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.performanceProvisioningType"></a>

- *Type:* java.lang.String

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#performance_provisioning_type GoogleComputeStoragePool#performance_provisioning_type}

---

##### `poolProvisionedIops`<sup>Optional</sup> <a name="poolProvisionedIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedIops"></a>

- *Type:* java.lang.String

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#pool_provisioned_iops GoogleComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#timeouts GoogleComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#zone GoogleComputeStoragePool#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType">resetCapacityProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType">resetPerformanceProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops">resetPoolProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putParams"></a>

```java
public void putParams(GoogleComputeStoragePoolParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeStoragePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

---

##### `resetCapacityProvisioningType` <a name="resetCapacityProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType"></a>

```java
public void resetCapacityProvisioningType()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetParams"></a>

```java
public void resetParams()
```

##### `resetPerformanceProvisioningType` <a name="resetPerformanceProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType"></a>

```java
public void resetPerformanceProvisioningType()
```

##### `resetPoolProvisionedIops` <a name="resetPoolProvisionedIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops"></a>

```java
public void resetPoolProvisionedIops()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeStoragePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePool;

GoogleComputeStoragePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePool;

GoogleComputeStoragePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePool;

GoogleComputeStoragePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePool;

GoogleComputeStoragePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeStoragePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeStoragePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference">GoogleComputeStoragePoolParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus">resourceStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status">status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput">capacityProvisioningTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput">performanceProvisioningTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput">poolProvisionedCapacityGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput">poolProvisionedIopsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput">poolProvisionedThroughputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput">storagePoolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType">capacityProvisioningType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType">performanceProvisioningType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops">poolProvisionedIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.params"></a>

```java
public GoogleComputeStoragePoolParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference">GoogleComputeStoragePoolParamsOutputReference</a>

---

##### `resourceStatus`<sup>Required</sup> <a name="resourceStatus" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus"></a>

```java
public GoogleComputeStoragePoolResourceStatusList getResourceStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status"></a>

```java
public GoogleComputeStoragePoolStatusList getStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts"></a>

```java
public GoogleComputeStoragePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a>

---

##### `capacityProvisioningTypeInput`<sup>Optional</sup> <a name="capacityProvisioningTypeInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput"></a>

```java
public java.lang.String getCapacityProvisioningTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.paramsInput"></a>

```java
public GoogleComputeStoragePoolParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a>

---

##### `performanceProvisioningTypeInput`<sup>Optional</sup> <a name="performanceProvisioningTypeInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput"></a>

```java
public java.lang.String getPerformanceProvisioningTypeInput();
```

- *Type:* java.lang.String

---

##### `poolProvisionedCapacityGbInput`<sup>Optional</sup> <a name="poolProvisionedCapacityGbInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput"></a>

```java
public java.lang.String getPoolProvisionedCapacityGbInput();
```

- *Type:* java.lang.String

---

##### `poolProvisionedIopsInput`<sup>Optional</sup> <a name="poolProvisionedIopsInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput"></a>

```java
public java.lang.String getPoolProvisionedIopsInput();
```

- *Type:* java.lang.String

---

##### `poolProvisionedThroughputInput`<sup>Optional</sup> <a name="poolProvisionedThroughputInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput"></a>

```java
public java.lang.String getPoolProvisionedThroughputInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storagePoolTypeInput`<sup>Optional</sup> <a name="storagePoolTypeInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput"></a>

```java
public java.lang.String getStoragePoolTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeStoragePoolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `capacityProvisioningType`<sup>Required</sup> <a name="capacityProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType"></a>

```java
public java.lang.String getCapacityProvisioningType();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `performanceProvisioningType`<sup>Required</sup> <a name="performanceProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType"></a>

```java
public java.lang.String getPerformanceProvisioningType();
```

- *Type:* java.lang.String

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```java
public java.lang.String getPoolProvisionedCapacityGb();
```

- *Type:* java.lang.String

---

##### `poolProvisionedIops`<sup>Required</sup> <a name="poolProvisionedIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops"></a>

```java
public java.lang.String getPoolProvisionedIops();
```

- *Type:* java.lang.String

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput"></a>

```java
public java.lang.String getPoolProvisionedThroughput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType"></a>

```java
public java.lang.String getStoragePoolType();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeStoragePoolConfig <a name="GoogleComputeStoragePoolConfig" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolConfig;

GoogleComputeStoragePoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .poolProvisionedCapacityGb(java.lang.String)
    .poolProvisionedThroughput(java.lang.String)
    .storagePoolType(java.lang.String)
//  .capacityProvisioningType(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .params(GoogleComputeStoragePoolParams)
//  .performanceProvisioningType(java.lang.String)
//  .poolProvisionedIops(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeStoragePoolTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>java.lang.String</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>java.lang.String</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType">storagePoolType</a></code> | <code>java.lang.String</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType">capacityProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this storage pool. These can be later modified by the setLabels method. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType">performanceProvisioningType</a></code> | <code>java.lang.String</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops">poolProvisionedIops</a></code> | <code>java.lang.String</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the storage pool resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#name GoogleComputeStoragePool#name}

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb"></a>

```java
public java.lang.String getPoolProvisionedCapacityGb();
```

- *Type:* java.lang.String

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#pool_provisioned_capacity_gb GoogleComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput"></a>

```java
public java.lang.String getPoolProvisionedThroughput();
```

- *Type:* java.lang.String

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#pool_provisioned_throughput GoogleComputeStoragePool#pool_provisioned_throughput}

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType"></a>

```java
public java.lang.String getStoragePoolType();
```

- *Type:* java.lang.String

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#storage_pool_type GoogleComputeStoragePool#storage_pool_type}

---

##### `capacityProvisioningType`<sup>Optional</sup> <a name="capacityProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType"></a>

```java
public java.lang.String getCapacityProvisioningType();
```

- *Type:* java.lang.String

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#capacity_provisioning_type GoogleComputeStoragePool#capacity_provisioning_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#deletion_policy GoogleComputeStoragePool#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#deletion_protection GoogleComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#description GoogleComputeStoragePool#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this storage pool. These can be later modified by the setLabels method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#labels GoogleComputeStoragePool#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.params"></a>

```java
public GoogleComputeStoragePoolParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#params GoogleComputeStoragePool#params}

---

##### `performanceProvisioningType`<sup>Optional</sup> <a name="performanceProvisioningType" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType"></a>

```java
public java.lang.String getPerformanceProvisioningType();
```

- *Type:* java.lang.String

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#performance_provisioning_type GoogleComputeStoragePool#performance_provisioning_type}

---

##### `poolProvisionedIops`<sup>Optional</sup> <a name="poolProvisionedIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops"></a>

```java
public java.lang.String getPoolProvisionedIops();
```

- *Type:* java.lang.String

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#pool_provisioned_iops GoogleComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts"></a>

```java
public GoogleComputeStoragePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#timeouts GoogleComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#zone GoogleComputeStoragePool#zone}

---

### GoogleComputeStoragePoolParams <a name="GoogleComputeStoragePoolParams" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolParams;

GoogleComputeStoragePoolParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the storage pool. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the storage pool.

Tag keys and values have the
same definition as resource manager tags. Keys and values can be either in numeric format,
such as tagKeys/{tag_key_id} and tagValues/{tag_value_id} or in namespaced format such as
{org_id|projectId}/{tag_key_short_name} and {tag_value_short_name}. The field is ignored when empty.
The field is immutable and causes resource replacement when mutated. This field is only
set at create time and modifying this field after creation will trigger recreation.
To apply tags to an existing resource, see the google_tags_tag_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#resource_manager_tags GoogleComputeStoragePool#resource_manager_tags}

---

### GoogleComputeStoragePoolResourceStatus <a name="GoogleComputeStoragePoolResourceStatus" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolResourceStatus;

GoogleComputeStoragePoolResourceStatus.builder()
    .build();
```


### GoogleComputeStoragePoolStatus <a name="GoogleComputeStoragePoolStatus" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolStatus;

GoogleComputeStoragePoolStatus.builder()
    .build();
```


### GoogleComputeStoragePoolTimeouts <a name="GoogleComputeStoragePoolTimeouts" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolTimeouts;

GoogleComputeStoragePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeStoragePoolParamsOutputReference <a name="GoogleComputeStoragePoolParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolParamsOutputReference;

new GoogleComputeStoragePoolParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParamsOutputReference.property.internalValue"></a>

```java
public GoogleComputeStoragePoolParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolParams">GoogleComputeStoragePoolParams</a>

---


### GoogleComputeStoragePoolResourceStatusList <a name="GoogleComputeStoragePoolResourceStatusList" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolResourceStatusList;

new GoogleComputeStoragePoolResourceStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get"></a>

```java
public GoogleComputeStoragePoolResourceStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeStoragePoolResourceStatusOutputReference <a name="GoogleComputeStoragePoolResourceStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolResourceStatusOutputReference;

new GoogleComputeStoragePoolResourceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount">diskCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```java
public java.lang.String getDiskCount();
```

- *Type:* java.lang.String

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```java
public java.lang.String getLastResizeTimestamp();
```

- *Type:* java.lang.String

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getMaxTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```java
public java.lang.String getPoolUsedCapacityBytes();
```

- *Type:* java.lang.String

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```java
public java.lang.String getPoolUsedIops();
```

- *Type:* java.lang.String

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```java
public java.lang.String getPoolUsedThroughput();
```

- *Type:* java.lang.String

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```java
public java.lang.String getPoolUserWrittenBytes();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```java
public java.lang.String getTotalProvisionedDiskIops();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```java
public java.lang.String getTotalProvisionedDiskThroughput();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```java
public GoogleComputeStoragePoolResourceStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a>

---


### GoogleComputeStoragePoolStatusList <a name="GoogleComputeStoragePoolStatusList" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolStatusList;

new GoogleComputeStoragePoolStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get"></a>

```java
public GoogleComputeStoragePoolStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeStoragePoolStatusOutputReference <a name="GoogleComputeStoragePoolStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolStatusOutputReference;

new GoogleComputeStoragePoolStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount">diskCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```java
public java.lang.String getDiskCount();
```

- *Type:* java.lang.String

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```java
public java.lang.String getLastResizeTimestamp();
```

- *Type:* java.lang.String

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getMaxTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```java
public java.lang.String getPoolUsedCapacityBytes();
```

- *Type:* java.lang.String

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```java
public java.lang.String getPoolUsedIops();
```

- *Type:* java.lang.String

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```java
public java.lang.String getPoolUsedThroughput();
```

- *Type:* java.lang.String

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```java
public java.lang.String getPoolUserWrittenBytes();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```java
public java.lang.String getTotalProvisionedDiskCapacityGb();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```java
public java.lang.String getTotalProvisionedDiskIops();
```

- *Type:* java.lang.String

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```java
public java.lang.String getTotalProvisionedDiskThroughput();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```java
public GoogleComputeStoragePoolStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a>

---


### GoogleComputeStoragePoolTimeoutsOutputReference <a name="GoogleComputeStoragePoolTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_storage_pool.GoogleComputeStoragePoolTimeoutsOutputReference;

new GoogleComputeStoragePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeStoragePoolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

---



