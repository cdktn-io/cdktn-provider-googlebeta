# `googleComputeZoneVmExtensionPolicy` Submodule <a name="`googleComputeZoneVmExtensionPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeZoneVmExtensionPolicy <a name="GoogleComputeZoneVmExtensionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicy;

GoogleComputeZoneVmExtensionPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .extensionPolicies(IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyExtensionPolicies>)
    .name(java.lang.String)
    .zone(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .instanceSelectors(IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyInstanceSelectors>)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeZoneVmExtensionPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.extensionPolicies">extensionPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>></code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.instanceSelectors">instanceSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>></code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `extensionPolicies`<sup>Required</sup> <a name="extensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.extensionPolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>>

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_policies GoogleComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#name GoogleComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#zone GoogleComputeZoneVmExtensionPolicy#zone}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#deletion_policy GoogleComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#description GoogleComputeZoneVmExtensionPolicy#description}

---

##### `instanceSelectors`<sup>Optional</sup> <a name="instanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.instanceSelectors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>>

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#instance_selectors GoogleComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#priority GoogleComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#timeouts GoogleComputeZoneVmExtensionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies">putExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors">putInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors">resetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionPolicies` <a name="putExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies"></a>

```java
public void putExtensionPolicies(IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyExtensionPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>>

---

##### `putInstanceSelectors` <a name="putInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors"></a>

```java
public void putInstanceSelectors(IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyInstanceSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeZoneVmExtensionPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInstanceSelectors` <a name="resetInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetInstanceSelectors"></a>

```java
public void resetInstanceSelectors()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicy;

GoogleComputeZoneVmExtensionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicy;

GoogleComputeZoneVmExtensionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicy;

GoogleComputeZoneVmExtensionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicy;

GoogleComputeZoneVmExtensionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeZoneVmExtensionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeZoneVmExtensionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeZoneVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeZoneVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies">extensionPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors">instanceSelectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal">managedByGlobal</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput">extensionPoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput">instanceSelectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `extensionPolicies`<sup>Required</sup> <a name="extensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPolicies"></a>

```java
public GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList getExtensionPolicies();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList">GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceSelectors`<sup>Required</sup> <a name="instanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectors"></a>

```java
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList getInstanceSelectors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `managedByGlobal`<sup>Required</sup> <a name="managedByGlobal" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.managedByGlobal"></a>

```java
public IResolvable getManagedByGlobal();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeouts"></a>

```java
public GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference">GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `extensionPoliciesInput`<sup>Optional</sup> <a name="extensionPoliciesInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.extensionPoliciesInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyExtensionPolicies> getExtensionPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>>

---

##### `instanceSelectorsInput`<sup>Optional</sup> <a name="instanceSelectorsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.instanceSelectorsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyInstanceSelectors> getInstanceSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeZoneVmExtensionPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeZoneVmExtensionPolicyConfig <a name="GoogleComputeZoneVmExtensionPolicyConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyConfig;

GoogleComputeZoneVmExtensionPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .extensionPolicies(IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyExtensionPolicies>)
    .name(java.lang.String)
    .zone(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .instanceSelectors(IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyInstanceSelectors>)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeZoneVmExtensionPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies">extensionPolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>></code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors">instanceSelectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>></code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `extensionPolicies`<sup>Required</sup> <a name="extensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.extensionPolicies"></a>

```java
public IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyExtensionPolicies> getExtensionPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>>

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_policies GoogleComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#name GoogleComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#zone GoogleComputeZoneVmExtensionPolicy#zone}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#deletion_policy GoogleComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#description GoogleComputeZoneVmExtensionPolicy#description}

---

##### `instanceSelectors`<sup>Optional</sup> <a name="instanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.instanceSelectors"></a>

```java
public IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyInstanceSelectors> getInstanceSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>>

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#instance_selectors GoogleComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#priority GoogleComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#project GoogleComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyConfig.property.timeouts"></a>

```java
public GoogleComputeZoneVmExtensionPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#timeouts GoogleComputeZoneVmExtensionPolicy#timeouts}

---

### GoogleComputeZoneVmExtensionPolicyExtensionPolicies <a name="GoogleComputeZoneVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies;

GoogleComputeZoneVmExtensionPolicyExtensionPolicies.builder()
    .extensionName(java.lang.String)
//  .pinnedVersion(java.lang.String)
//  .stringConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName">extensionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion">pinnedVersion</a></code> | <code>java.lang.String</code> | The specific version of the extension to install. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig">stringConfig</a></code> | <code>java.lang.String</code> | String-based configuration data for the extension. |

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```java
public java.lang.String getExtensionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#extension_name GoogleComputeZoneVmExtensionPolicy#extension_name}.

---

##### `pinnedVersion`<sup>Optional</sup> <a name="pinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```java
public java.lang.String getPinnedVersion();
```

- *Type:* java.lang.String

The specific version of the extension to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#pinned_version GoogleComputeZoneVmExtensionPolicy#pinned_version}

---

##### `stringConfig`<sup>Optional</sup> <a name="stringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```java
public java.lang.String getStringConfig();
```

- *Type:* java.lang.String

String-based configuration data for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#string_config GoogleComputeZoneVmExtensionPolicy#string_config}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectors <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors;

GoogleComputeZoneVmExtensionPolicyInstanceSelectors.builder()
//  .labelSelector(GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector">labelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `labelSelector`<sup>Optional</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```java
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector getLabelSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#label_selector GoogleComputeZoneVmExtensionPolicy#label_selector}

---

### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;

GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.builder()
//  .inclusionLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">inclusionLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key-value pairs representing VM labels. |

---

##### `inclusionLabels`<sup>Optional</sup> <a name="inclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInclusionLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#inclusion_labels GoogleComputeZoneVmExtensionPolicy#inclusion_labels}

---

### GoogleComputeZoneVmExtensionPolicyTimeouts <a name="GoogleComputeZoneVmExtensionPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyTimeouts;

GoogleComputeZoneVmExtensionPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#create GoogleComputeZoneVmExtensionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#delete GoogleComputeZoneVmExtensionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_compute_zone_vm_extension_policy#update GoogleComputeZoneVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList;

new GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get"></a>

```java
public GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyExtensionPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>>

---


### GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference <a name="GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference;

new GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">resetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">resetStringConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinnedVersion` <a name="resetPinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```java
public void resetPinnedVersion()
```

##### `resetStringConfig` <a name="resetStringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```java
public void resetStringConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">extensionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">pinnedVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">stringConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">extensionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">pinnedVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">stringConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensionNameInput`<sup>Optional</sup> <a name="extensionNameInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```java
public java.lang.String getExtensionNameInput();
```

- *Type:* java.lang.String

---

##### `pinnedVersionInput`<sup>Optional</sup> <a name="pinnedVersionInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```java
public java.lang.String getPinnedVersionInput();
```

- *Type:* java.lang.String

---

##### `stringConfigInput`<sup>Optional</sup> <a name="stringConfigInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```java
public java.lang.String getStringConfigInput();
```

- *Type:* java.lang.String

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```java
public java.lang.String getExtensionName();
```

- *Type:* java.lang.String

---

##### `pinnedVersion`<sup>Required</sup> <a name="pinnedVersion" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```java
public java.lang.String getPinnedVersion();
```

- *Type:* java.lang.String

---

##### `stringConfig`<sup>Required</sup> <a name="stringConfig" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```java
public java.lang.String getStringConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeZoneVmExtensionPolicyExtensionPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyExtensionPolicies">GoogleComputeZoneVmExtensionPolicyExtensionPolicies</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">resetInclusionLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInclusionLabels` <a name="resetInclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```java
public void resetInclusionLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">inclusionLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">inclusionLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inclusionLabelsInput`<sup>Optional</sup> <a name="inclusionLabelsInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInclusionLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `inclusionLabels`<sup>Required</sup> <a name="inclusionLabels" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInclusionLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```java
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get"></a>

```java
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeZoneVmExtensionPolicyInstanceSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>>

---


### GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference;

new GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">putLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">resetLabelSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelSelector` <a name="putLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```java
public void putLabelSelector(GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `resetLabelSelector` <a name="resetLabelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```java
public void resetLabelSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">labelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```java
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference getLabelSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```java
public GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector getLabelSelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeZoneVmExtensionPolicyInstanceSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyInstanceSelectors">GoogleComputeZoneVmExtensionPolicyInstanceSelectors</a>

---


### GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference <a name="GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_zone_vm_extension_policy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference;

new GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeZoneVmExtensionPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeZoneVmExtensionPolicy.GoogleComputeZoneVmExtensionPolicyTimeouts">GoogleComputeZoneVmExtensionPolicyTimeouts</a>

---



