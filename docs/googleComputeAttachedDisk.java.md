# `googleComputeAttachedDisk` Submodule <a name="`googleComputeAttachedDisk` Submodule" id="@cdktn/provider-google-beta.googleComputeAttachedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeAttachedDisk <a name="GoogleComputeAttachedDisk" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk google_compute_attached_disk}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDisk;

GoogleComputeAttachedDisk.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .disk(java.lang.String)
    .instance(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deviceName(java.lang.String)
//  .id(java.lang.String)
//  .interface(java.lang.String)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeAttachedDiskTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.disk">disk</a></code> | <code>java.lang.String</code> | name or self_link of the disk that will be attached. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | name or self_link of the compute instance that the disk will be attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#id GoogleComputeAttachedDisk#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.interface">interface</a></code> | <code>java.lang.String</code> | The disk interface used for attaching this disk. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project that the referenced compute instance is a part of. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone that the referenced compute instance is located within. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.disk"></a>

- *Type:* java.lang.String

name or self_link of the disk that will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#disk GoogleComputeAttachedDisk#disk}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

name or self_link of the compute instance that the disk will be attached to.

If the self_link is provided then zone and project are extracted from the self link. If only the name is used then zone and project must be defined as properties on the resource or provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#instance GoogleComputeAttachedDisk#instance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#deletion_policy GoogleComputeAttachedDisk#deletion_policy}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.deviceName"></a>

- *Type:* java.lang.String

Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance.

This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#device_name GoogleComputeAttachedDisk#device_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#id GoogleComputeAttachedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.interface"></a>

- *Type:* java.lang.String

The disk interface used for attaching this disk.

One of SCSI or NVME. (This field is only used for specific cases, please don't specify this field without advice from Google.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#interface GoogleComputeAttachedDisk#interface}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#mode GoogleComputeAttachedDisk#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project that the referenced compute instance is a part of.

If instance is referenced by its self_link the project defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#project GoogleComputeAttachedDisk#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#timeouts GoogleComputeAttachedDisk#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone that the referenced compute instance is located within.

If instance is referenced by its self_link the zone defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#zone GoogleComputeAttachedDisk#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeAttachedDiskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetId"></a>

```java
public void resetId()
```

##### `resetInterface` <a name="resetInterface" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetInterface"></a>

```java
public void resetInterface()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetMode"></a>

```java
public void resetMode()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeAttachedDisk resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDisk;

GoogleComputeAttachedDisk.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDisk;

GoogleComputeAttachedDisk.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDisk;

GoogleComputeAttachedDisk.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDisk;

GoogleComputeAttachedDisk.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeAttachedDisk.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeAttachedDisk resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeAttachedDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeAttachedDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeAttachedDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference">GoogleComputeAttachedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.diskInput">diskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.disk">disk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeouts"></a>

```java
public GoogleComputeAttachedDiskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference">GoogleComputeAttachedDiskTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.diskInput"></a>

```java
public java.lang.String getDiskInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeAttachedDiskTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDisk.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeAttachedDiskConfig <a name="GoogleComputeAttachedDiskConfig" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDiskConfig;

GoogleComputeAttachedDiskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .disk(java.lang.String)
    .instance(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deviceName(java.lang.String)
//  .id(java.lang.String)
//  .interface(java.lang.String)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeAttachedDiskTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.disk">disk</a></code> | <code>java.lang.String</code> | name or self_link of the disk that will be attached. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | name or self_link of the compute instance that the disk will be attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#id GoogleComputeAttachedDisk#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.interface">interface</a></code> | <code>java.lang.String</code> | The disk interface used for attaching this disk. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project that the referenced compute instance is a part of. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone that the referenced compute instance is located within. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

name or self_link of the disk that will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#disk GoogleComputeAttachedDisk#disk}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

name or self_link of the compute instance that the disk will be attached to.

If the self_link is provided then zone and project are extracted from the self link. If only the name is used then zone and project must be defined as properties on the resource or provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#instance GoogleComputeAttachedDisk#instance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#deletion_policy GoogleComputeAttachedDisk#deletion_policy}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance.

This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#device_name GoogleComputeAttachedDisk#device_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#id GoogleComputeAttachedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

The disk interface used for attaching this disk.

One of SCSI or NVME. (This field is only used for specific cases, please don't specify this field without advice from Google.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#interface GoogleComputeAttachedDisk#interface}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#mode GoogleComputeAttachedDisk#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project that the referenced compute instance is a part of.

If instance is referenced by its self_link the project defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#project GoogleComputeAttachedDisk#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.timeouts"></a>

```java
public GoogleComputeAttachedDiskTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#timeouts GoogleComputeAttachedDisk#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone that the referenced compute instance is located within.

If instance is referenced by its self_link the zone defined in the link will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#zone GoogleComputeAttachedDisk#zone}

---

### GoogleComputeAttachedDiskTimeouts <a name="GoogleComputeAttachedDiskTimeouts" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDiskTimeouts;

GoogleComputeAttachedDiskTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#create GoogleComputeAttachedDisk#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#delete GoogleComputeAttachedDisk#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#create GoogleComputeAttachedDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_attached_disk#delete GoogleComputeAttachedDisk#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeAttachedDiskTimeoutsOutputReference <a name="GoogleComputeAttachedDiskTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_attached_disk.GoogleComputeAttachedDiskTimeoutsOutputReference;

new GoogleComputeAttachedDiskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeAttachedDiskTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeAttachedDisk.GoogleComputeAttachedDiskTimeouts">GoogleComputeAttachedDiskTimeouts</a>

---



