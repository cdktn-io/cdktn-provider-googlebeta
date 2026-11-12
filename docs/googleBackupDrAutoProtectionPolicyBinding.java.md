# `googleBackupDrAutoProtectionPolicyBinding` Submodule <a name="`googleBackupDrAutoProtectionPolicyBinding` Submodule" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrAutoProtectionPolicyBinding <a name="GoogleBackupDrAutoProtectionPolicyBinding" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding google_backup_dr_auto_protection_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBinding;

GoogleBackupDrAutoProtectionPolicyBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoProtectionPolicyBindingId(java.lang.String)
    .autoProtectionPolicyId(java.lang.String)
    .location(java.lang.String)
    .scope(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBackupDrAutoProtectionPolicyBindingTimeouts)
//  .waitForDelete(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>java.lang.String</code> | The ID of the binding. This becomes the final component of the binding's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | The ID of the auto protection policy to bind. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The container that the policy is applied to, in the format 'projects/{project}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.waitForDelete">waitForDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyBindingId"></a>

- *Type:* java.lang.String

The ID of the binding. This becomes the final component of the binding's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.autoProtectionPolicyId"></a>

- *Type:* java.lang.String

The ID of the auto protection policy to bind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#location GoogleBackupDrAutoProtectionPolicyBinding#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The container that the policy is applied to, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#scope GoogleBackupDrAutoProtectionPolicyBinding#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#deletion_policy GoogleBackupDrAutoProtectionPolicyBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#timeouts GoogleBackupDrAutoProtectionPolicyBinding#timeouts}

---

##### `waitForDelete`<sup>Optional</sup> <a name="waitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.waitForDelete"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning.

Setting
'wait_for_delete = true' will block the Terraform script/execution until all resources
are unprotected and the binding is fully removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#wait_for_delete GoogleBackupDrAutoProtectionPolicyBinding#wait_for_delete}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetWaitForDelete">resetWaitForDelete</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleBackupDrAutoProtectionPolicyBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWaitForDelete` <a name="resetWaitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetWaitForDelete"></a>

```java
public void resetWaitForDelete()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBinding;

GoogleBackupDrAutoProtectionPolicyBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBinding;

GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBinding;

GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBinding;

GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBackupDrAutoProtectionPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBackupDrAutoProtectionPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrAutoProtectionPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary">bindingEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput">autoProtectionPolicyBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput">autoProtectionPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput">waitForDeleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDelete">waitForDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bindingEvaluationSummary`<sup>Required</sup> <a name="bindingEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary"></a>

```java
public GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList getBindingEvaluationSummary();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeouts"></a>

```java
public GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `autoProtectionPolicyBindingIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyBindingIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput"></a>

```java
public java.lang.String getAutoProtectionPolicyBindingIdInput();
```

- *Type:* java.lang.String

---

##### `autoProtectionPolicyIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput"></a>

```java
public java.lang.String getAutoProtectionPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBackupDrAutoProtectionPolicyBindingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `waitForDeleteInput`<sup>Optional</sup> <a name="waitForDeleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForDeleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId"></a>

```java
public java.lang.String getAutoProtectionPolicyBindingId();
```

- *Type:* java.lang.String

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId"></a>

```java
public java.lang.String getAutoProtectionPolicyId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `waitForDelete`<sup>Required</sup> <a name="waitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDelete"></a>

```java
public java.lang.Boolean|IResolvable getWaitForDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary;

GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary.builder()
    .build();
```


### GoogleBackupDrAutoProtectionPolicyBindingConfig <a name="GoogleBackupDrAutoProtectionPolicyBindingConfig" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBindingConfig;

GoogleBackupDrAutoProtectionPolicyBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoProtectionPolicyBindingId(java.lang.String)
    .autoProtectionPolicyId(java.lang.String)
    .location(java.lang.String)
    .scope(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBackupDrAutoProtectionPolicyBindingTimeouts)
//  .waitForDelete(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId">autoProtectionPolicyBindingId</a></code> | <code>java.lang.String</code> | The ID of the binding. This becomes the final component of the binding's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>java.lang.String</code> | The ID of the auto protection policy to bind. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The container that the policy is applied to, in the format 'projects/{project}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete">waitForDelete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoProtectionPolicyBindingId`<sup>Required</sup> <a name="autoProtectionPolicyBindingId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId"></a>

```java
public java.lang.String getAutoProtectionPolicyBindingId();
```

- *Type:* java.lang.String

The ID of the binding. This becomes the final component of the binding's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId"></a>

```java
public java.lang.String getAutoProtectionPolicyId();
```

- *Type:* java.lang.String

The ID of the auto protection policy to bind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#location GoogleBackupDrAutoProtectionPolicyBinding#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The container that the policy is applied to, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#scope GoogleBackupDrAutoProtectionPolicyBinding#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#deletion_policy GoogleBackupDrAutoProtectionPolicyBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.timeouts"></a>

```java
public GoogleBackupDrAutoProtectionPolicyBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#timeouts GoogleBackupDrAutoProtectionPolicyBinding#timeouts}

---

##### `waitForDelete`<sup>Optional</sup> <a name="waitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete"></a>

```java
public java.lang.Boolean|IResolvable getWaitForDelete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning.

Setting
'wait_for_delete = true' will block the Terraform script/execution until all resources
are unprotected and the binding is fully removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#wait_for_delete GoogleBackupDrAutoProtectionPolicyBinding#wait_for_delete}

---

### GoogleBackupDrAutoProtectionPolicyBindingTimeouts <a name="GoogleBackupDrAutoProtectionPolicyBindingTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts;

GoogleBackupDrAutoProtectionPolicyBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#create GoogleBackupDrAutoProtectionPolicyBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#delete GoogleBackupDrAutoProtectionPolicyBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#update GoogleBackupDrAutoProtectionPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#create GoogleBackupDrAutoProtectionPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#delete GoogleBackupDrAutoProtectionPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#update GoogleBackupDrAutoProtectionPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList;

new GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get"></a>

```java
public GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference;

new GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount">failedResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount">matchingResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount">protectedResourceCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failedResourceCount`<sup>Required</sup> <a name="failedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```java
public java.lang.String getFailedResourceCount();
```

- *Type:* java.lang.String

---

##### `matchingResourceCount`<sup>Required</sup> <a name="matchingResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```java
public java.lang.String getMatchingResourceCount();
```

- *Type:* java.lang.String

---

##### `protectedResourceCount`<sup>Required</sup> <a name="protectedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```java
public java.lang.String getProtectedResourceCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue"></a>

```java
public GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_backup_dr_auto_protection_policy_binding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference;

new GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBackupDrAutoProtectionPolicyBindingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

---



