# `googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicy <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy google_compute_organization_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicy;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable|java.util.List<GoogleComputeOrganizationSnapshotRecycleBinPolicyRules>)
//  .timeouts(GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization ID for this request (e.g., "organizations/1234"). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization ID for this request (e.g., "organizations/1234").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<GoogleComputeOrganizationSnapshotRecycleBinPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules"></a>

```java
public void resetRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicy;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicy;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicy;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicy;

GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeOrganizationSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules">systemRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a>

---

##### `systemRules`<sup>Required</sup> <a name="systemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList getSystemRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSnapshotRecycleBinPolicyRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig;

GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .id(java.lang.String)
//  .rules(IResolvable|java.util.List<GoogleComputeOrganizationSnapshotRecycleBinPolicyRules>)
//  .timeouts(GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization ID for this request (e.g., "organizations/1234"). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization ID for this request (e.g., "organizations/1234").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSnapshotRecycleBinPolicyRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules;

GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.builder()
    .name(java.lang.String)
//  .standardSnapshots(GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}.

---

##### `standardSnapshots`<sup>Optional</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots getStandardSnapshots();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeOrganizationSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots;

GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.builder()
//  .retentionDurationDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">retentionDurationDays</a></code> | <code>java.lang.Number</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `retentionDurationDays`<sup>Optional</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```java
public java.lang.Number getRetentionDurationDays();
```

- *Type:* java.lang.Number

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeOrganizationSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules;

GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules.builder()
    .build();
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots;

GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots.builder()
    .build();
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts;

GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSnapshotRecycleBinPolicyRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">putStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">resetStandardSnapshots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardSnapshots` <a name="putStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```java
public void putStandardSnapshots(GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `resetStandardSnapshots` <a name="resetStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```java
public void resetStandardSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">standardSnapshotsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `standardSnapshots`<sup>Required</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference getStandardSnapshots();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `standardSnapshotsInput`<sup>Optional</sup> <a name="standardSnapshotsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots getStandardSnapshotsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules">GoogleComputeOrganizationSnapshotRecycleBinPolicyRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">resetRetentionDurationDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionDurationDays` <a name="resetRetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```java
public void resetRetentionDurationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">retentionDurationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionDurationDaysInput`<sup>Optional</sup> <a name="retentionDurationDaysInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```java
public java.lang.Number getRetentionDurationDaysInput();
```

- *Type:* java.lang.Number

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```java
public java.lang.Number getRetentionDurationDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">standardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `standardSnapshots`<sup>Required</sup> <a name="standardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList getStandardSnapshots();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference;

new GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```java
public java.lang.Number getRetentionDurationDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_snapshot_recycle_bin_policy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference;

new GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---



