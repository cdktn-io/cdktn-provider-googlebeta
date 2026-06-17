# `googleComputeRolloutPlan` Submodule <a name="`googleComputeRolloutPlan` Submodule" id="@cdktn/provider-google-beta.googleComputeRolloutPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRolloutPlan <a name="GoogleComputeRolloutPlan" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan google_compute_rollout_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlan;

GoogleComputeRolloutPlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .waves(IResolvable|java.util.List<GoogleComputeRolloutPlanWaves>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locationScope(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeRolloutPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.waves">waves</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>></code> | waves block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.locationScope">locationScope</a></code> | <code>java.lang.String</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#name GoogleComputeRolloutPlan#name}

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.waves"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>>

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#waves GoogleComputeRolloutPlan#waves}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#deletion_policy GoogleComputeRolloutPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#description GoogleComputeRolloutPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationScope`<sup>Optional</sup> <a name="locationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.locationScope"></a>

- *Type:* java.lang.String

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#location_scope GoogleComputeRolloutPlan#location_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#timeouts GoogleComputeRolloutPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves">putWaves</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope">resetLocationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRolloutPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---

##### `putWaves` <a name="putWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves"></a>

```java
public void putWaves(IResolvable|java.util.List<GoogleComputeRolloutPlanWaves> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId"></a>

```java
public void resetId()
```

##### `resetLocationScope` <a name="resetLocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope"></a>

```java
public void resetLocationScope()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlan;

GoogleComputeRolloutPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlan;

GoogleComputeRolloutPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlan;

GoogleComputeRolloutPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlan;

GoogleComputeRolloutPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRolloutPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRolloutPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRolloutPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRolloutPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves">waves</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput">locationScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput">wavesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope">locationScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts"></a>

```java
public GoogleComputeRolloutPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a>

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves"></a>

```java
public GoogleComputeRolloutPlanWavesList getWaves();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationScopeInput`<sup>Optional</sup> <a name="locationScopeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput"></a>

```java
public java.lang.String getLocationScopeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeRolloutPlanTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---

##### `wavesInput`<sup>Optional</sup> <a name="wavesInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWaves> getWavesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationScope`<sup>Required</sup> <a name="locationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope"></a>

```java
public java.lang.String getLocationScope();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRolloutPlanConfig <a name="GoogleComputeRolloutPlanConfig" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanConfig;

GoogleComputeRolloutPlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .waves(IResolvable|java.util.List<GoogleComputeRolloutPlanWaves>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locationScope(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeRolloutPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves">waves</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>></code> | waves block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope">locationScope</a></code> | <code>java.lang.String</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#name GoogleComputeRolloutPlan#name}

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWaves> getWaves();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>>

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#waves GoogleComputeRolloutPlan#waves}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#deletion_policy GoogleComputeRolloutPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#description GoogleComputeRolloutPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationScope`<sup>Optional</sup> <a name="locationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope"></a>

```java
public java.lang.String getLocationScope();
```

- *Type:* java.lang.String

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#location_scope GoogleComputeRolloutPlan#location_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts"></a>

```java
public GoogleComputeRolloutPlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#timeouts GoogleComputeRolloutPlan#timeouts}

---

### GoogleComputeRolloutPlanTimeouts <a name="GoogleComputeRolloutPlanTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanTimeouts;

GoogleComputeRolloutPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}.

---

### GoogleComputeRolloutPlanWaves <a name="GoogleComputeRolloutPlanWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWaves;

GoogleComputeRolloutPlanWaves.builder()
    .selectors(IResolvable|java.util.List<GoogleComputeRolloutPlanWavesSelectors>)
    .validation(GoogleComputeRolloutPlanWavesValidation)
//  .displayName(java.lang.String)
//  .orchestrationOptions(GoogleComputeRolloutPlanWavesOrchestrationOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors">selectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>></code> | selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | validation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of this wave of the rollout plan. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions">orchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | orchestration_options block. |

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWavesSelectors> getSelectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#selectors GoogleComputeRolloutPlan#selectors}

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation"></a>

```java
public GoogleComputeRolloutPlanWavesValidation getValidation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#validation GoogleComputeRolloutPlan#validation}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of this wave of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#display_name GoogleComputeRolloutPlan#display_name}

---

##### `orchestrationOptions`<sup>Optional</sup> <a name="orchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions"></a>

```java
public GoogleComputeRolloutPlanWavesOrchestrationOptions getOrchestrationOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

orchestration_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#orchestration_options GoogleComputeRolloutPlan#orchestration_options}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptions <a name="GoogleComputeRolloutPlanWavesOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesOrchestrationOptions;

GoogleComputeRolloutPlanWavesOrchestrationOptions.builder()
//  .delays(IResolvable|java.util.List<GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays>)
//  .maxConcurrentLocations(java.lang.Number)
//  .maxConcurrentResourcesPerLocation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays">delays</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>></code> | delays block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations">maxConcurrentLocations</a></code> | <code>java.lang.Number</code> | Maximum number of locations to be orchestrated in parallel. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation">maxConcurrentResourcesPerLocation</a></code> | <code>java.lang.Number</code> | Maximum number of resources to be orchestrated per location in parallel. |

---

##### `delays`<sup>Optional</sup> <a name="delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays> getDelays();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>>

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delays GoogleComputeRolloutPlan#delays}

---

##### `maxConcurrentLocations`<sup>Optional</sup> <a name="maxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations"></a>

```java
public java.lang.Number getMaxConcurrentLocations();
```

- *Type:* java.lang.Number

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#max_concurrent_locations GoogleComputeRolloutPlan#max_concurrent_locations}

---

##### `maxConcurrentResourcesPerLocation`<sup>Optional</sup> <a name="maxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation"></a>

```java
public java.lang.Number getMaxConcurrentResourcesPerLocation();
```

- *Type:* java.lang.Number

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#max_concurrent_resources_per_location GoogleComputeRolloutPlan#max_concurrent_resources_per_location}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays;

GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.builder()
//  .delimiter(java.lang.String)
//  .duration(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration of the delay, if any, to be added between batches of projects. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type">type</a></code> | <code>java.lang.String</code> | Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location.

Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#delimiter GoogleComputeRolloutPlan#delimiter}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration of the delay, if any, to be added between batches of projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#duration GoogleComputeRolloutPlan#duration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration.

Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

### GoogleComputeRolloutPlanWavesSelectors <a name="GoogleComputeRolloutPlanWavesSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesSelectors;

GoogleComputeRolloutPlanWavesSelectors.builder()
//  .locationSelector(GoogleComputeRolloutPlanWavesSelectorsLocationSelector)
//  .resourceHierarchySelector(GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector">locationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | location_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector">resourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | resource_hierarchy_selector block. |

---

##### `locationSelector`<sup>Optional</sup> <a name="locationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsLocationSelector getLocationSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

location_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#location_selector GoogleComputeRolloutPlan#location_selector}

---

##### `resourceHierarchySelector`<sup>Optional</sup> <a name="resourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector getResourceHierarchySelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

resource_hierarchy_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#resource_hierarchy_selector GoogleComputeRolloutPlan#resource_hierarchy_selector}

---

### GoogleComputeRolloutPlanWavesSelectorsLocationSelector <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector;

GoogleComputeRolloutPlanWavesSelectorsLocationSelector.builder()
//  .includedLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations">includedLocations</a></code> | <code>java.util.List<java.lang.String></code> | Example: "us-central1-a". |

---

##### `includedLocations`<sup>Optional</sup> <a name="includedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations"></a>

```java
public java.util.List<java.lang.String> getIncludedLocations();
```

- *Type:* java.util.List<java.lang.String>

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_locations GoogleComputeRolloutPlan#included_locations}

---

### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector;

GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.builder()
//  .includedFolders(java.util.List<java.lang.String>)
//  .includedOrganizations(java.util.List<java.lang.String>)
//  .includedProjects(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders">includedFolders</a></code> | <code>java.util.List<java.lang.String></code> | Format: "folders/{folder_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations">includedOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | Format: "organizations/{organization_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects">includedProjects</a></code> | <code>java.util.List<java.lang.String></code> | Format: "projects/{project_id}". |

---

##### `includedFolders`<sup>Optional</sup> <a name="includedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders"></a>

```java
public java.util.List<java.lang.String> getIncludedFolders();
```

- *Type:* java.util.List<java.lang.String>

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_folders GoogleComputeRolloutPlan#included_folders}

---

##### `includedOrganizations`<sup>Optional</sup> <a name="includedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations"></a>

```java
public java.util.List<java.lang.String> getIncludedOrganizations();
```

- *Type:* java.util.List<java.lang.String>

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_organizations GoogleComputeRolloutPlan#included_organizations}

---

##### `includedProjects`<sup>Optional</sup> <a name="includedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects"></a>

```java
public java.util.List<java.lang.String> getIncludedProjects();
```

- *Type:* java.util.List<java.lang.String>

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#included_projects GoogleComputeRolloutPlan#included_projects}

---

### GoogleComputeRolloutPlanWavesValidation <a name="GoogleComputeRolloutPlanWavesValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesValidation;

GoogleComputeRolloutPlanWavesValidation.builder()
    .type(java.lang.String)
//  .timeBasedValidationMetadata(GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type">type</a></code> | <code>java.lang.String</code> | The type of the validation. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata">timeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | time_based_validation_metadata block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

##### `timeBasedValidationMetadata`<sup>Optional</sup> <a name="timeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata"></a>

```java
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata getTimeBasedValidationMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#time_based_validation_metadata GoogleComputeRolloutPlan#time_based_validation_metadata}

---

### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata;

GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.builder()
//  .waitDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration">waitDuration</a></code> | <code>java.lang.String</code> | The duration that the system waits in between waves. |

---

##### `waitDuration`<sup>Optional</sup> <a name="waitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration"></a>

```java
public java.lang.String getWaitDuration();
```

- *Type:* java.lang.String

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_rollout_plan#wait_duration GoogleComputeRolloutPlan#wait_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRolloutPlanTimeoutsOutputReference <a name="GoogleComputeRolloutPlanTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanTimeoutsOutputReference;

new GoogleComputeRolloutPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRolloutPlanTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---


### GoogleComputeRolloutPlanWavesList <a name="GoogleComputeRolloutPlanWavesList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesList;

new GoogleComputeRolloutPlanWavesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get"></a>

```java
public GoogleComputeRolloutPlanWavesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWaves> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>>

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList;

new GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get"></a>

```java
public GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>>

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference;

new GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference;

new GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays">putDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays">resetDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations">resetMaxConcurrentLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation">resetMaxConcurrentResourcesPerLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDelays` <a name="putDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays"></a>

```java
public void putDelays(IResolvable|java.util.List<GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>>

---

##### `resetDelays` <a name="resetDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays"></a>

```java
public void resetDelays()
```

##### `resetMaxConcurrentLocations` <a name="resetMaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations"></a>

```java
public void resetMaxConcurrentLocations()
```

##### `resetMaxConcurrentResourcesPerLocation` <a name="resetMaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation"></a>

```java
public void resetMaxConcurrentResourcesPerLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays">delays</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput">delaysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput">maxConcurrentLocationsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput">maxConcurrentResourcesPerLocationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations">maxConcurrentLocations</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation">maxConcurrentResourcesPerLocation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delays`<sup>Required</sup> <a name="delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays"></a>

```java
public GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList getDelays();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a>

---

##### `delaysInput`<sup>Optional</sup> <a name="delaysInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays> getDelaysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays</a>>

---

##### `maxConcurrentLocationsInput`<sup>Optional</sup> <a name="maxConcurrentLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput"></a>

```java
public java.lang.Number getMaxConcurrentLocationsInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentResourcesPerLocationInput`<sup>Optional</sup> <a name="maxConcurrentResourcesPerLocationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput"></a>

```java
public java.lang.Number getMaxConcurrentResourcesPerLocationInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentLocations`<sup>Required</sup> <a name="maxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations"></a>

```java
public java.lang.Number getMaxConcurrentLocations();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentResourcesPerLocation`<sup>Required</sup> <a name="maxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation"></a>

```java
public java.lang.Number getMaxConcurrentResourcesPerLocation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue"></a>

```java
public GoogleComputeRolloutPlanWavesOrchestrationOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---


### GoogleComputeRolloutPlanWavesOutputReference <a name="GoogleComputeRolloutPlanWavesOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesOutputReference;

new GoogleComputeRolloutPlanWavesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions">putOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation">putValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions">resetOrchestrationOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrchestrationOptions` <a name="putOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions"></a>

```java
public void putOrchestrationOptions(GoogleComputeRolloutPlanWavesOrchestrationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `putSelectors` <a name="putSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors"></a>

```java
public void putSelectors(IResolvable|java.util.List<GoogleComputeRolloutPlanWavesSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>>

---

##### `putValidation` <a name="putValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation"></a>

```java
public void putValidation(GoogleComputeRolloutPlanWavesValidation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetOrchestrationOptions` <a name="resetOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions"></a>

```java
public void resetOrchestrationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number">number</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions">orchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput">orchestrationOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput">validationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

---

##### `orchestrationOptions`<sup>Required</sup> <a name="orchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions"></a>

```java
public GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference getOrchestrationOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsList getSelectors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation"></a>

```java
public GoogleComputeRolloutPlanWavesValidationOutputReference getValidation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `orchestrationOptionsInput`<sup>Optional</sup> <a name="orchestrationOptionsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput"></a>

```java
public GoogleComputeRolloutPlanWavesOrchestrationOptions getOrchestrationOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWavesSelectors> getSelectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>>

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput"></a>

```java
public GoogleComputeRolloutPlanWavesValidation getValidationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRolloutPlanWaves getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves">GoogleComputeRolloutPlanWaves</a>

---


### GoogleComputeRolloutPlanWavesSelectorsList <a name="GoogleComputeRolloutPlanWavesSelectorsList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesSelectorsList;

new GoogleComputeRolloutPlanWavesSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeRolloutPlanWavesSelectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>>

---


### GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference;

new GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations">resetIncludedLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedLocations` <a name="resetIncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations"></a>

```java
public void resetIncludedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput">includedLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations">includedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includedLocationsInput`<sup>Optional</sup> <a name="includedLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedLocations`<sup>Required</sup> <a name="includedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations"></a>

```java
public java.util.List<java.lang.String> getIncludedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsLocationSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---


### GoogleComputeRolloutPlanWavesSelectorsOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesSelectorsOutputReference;

new GoogleComputeRolloutPlanWavesSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector">putLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector">putResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector">resetLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector">resetResourceHierarchySelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationSelector` <a name="putLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector"></a>

```java
public void putLocationSelector(GoogleComputeRolloutPlanWavesSelectorsLocationSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `putResourceHierarchySelector` <a name="putResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector"></a>

```java
public void putResourceHierarchySelector(GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `resetLocationSelector` <a name="resetLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector"></a>

```java
public void resetLocationSelector()
```

##### `resetResourceHierarchySelector` <a name="resetResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector"></a>

```java
public void resetResourceHierarchySelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector">locationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector">resourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput">locationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput">resourceHierarchySelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationSelector`<sup>Required</sup> <a name="locationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference getLocationSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a>

---

##### `resourceHierarchySelector`<sup>Required</sup> <a name="resourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference getResourceHierarchySelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a>

---

##### `locationSelectorInput`<sup>Optional</sup> <a name="locationSelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsLocationSelector getLocationSelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `resourceHierarchySelectorInput`<sup>Optional</sup> <a name="resourceHierarchySelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector getResourceHierarchySelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRolloutPlanWavesSelectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors">GoogleComputeRolloutPlanWavesSelectors</a>

---


### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference;

new GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders">resetIncludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations">resetIncludedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects">resetIncludedProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedFolders` <a name="resetIncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders"></a>

```java
public void resetIncludedFolders()
```

##### `resetIncludedOrganizations` <a name="resetIncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations"></a>

```java
public void resetIncludedOrganizations()
```

##### `resetIncludedProjects` <a name="resetIncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects"></a>

```java
public void resetIncludedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput">includedFoldersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput">includedOrganizationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput">includedProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders">includedFolders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations">includedOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects">includedProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includedFoldersInput`<sup>Optional</sup> <a name="includedFoldersInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput"></a>

```java
public java.util.List<java.lang.String> getIncludedFoldersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedOrganizationsInput`<sup>Optional</sup> <a name="includedOrganizationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedOrganizationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedProjectsInput`<sup>Optional</sup> <a name="includedProjectsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedFolders`<sup>Required</sup> <a name="includedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders"></a>

```java
public java.util.List<java.lang.String> getIncludedFolders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedOrganizations`<sup>Required</sup> <a name="includedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations"></a>

```java
public java.util.List<java.lang.String> getIncludedOrganizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedProjects`<sup>Required</sup> <a name="includedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects"></a>

```java
public java.util.List<java.lang.String> getIncludedProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue"></a>

```java
public GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---


### GoogleComputeRolloutPlanWavesValidationOutputReference <a name="GoogleComputeRolloutPlanWavesValidationOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesValidationOutputReference;

new GoogleComputeRolloutPlanWavesValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata">putTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata">resetTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeBasedValidationMetadata` <a name="putTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata"></a>

```java
public void putTimeBasedValidationMetadata(GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `resetTimeBasedValidationMetadata` <a name="resetTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata"></a>

```java
public void resetTimeBasedValidationMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata">timeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput">timeBasedValidationMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeBasedValidationMetadata`<sup>Required</sup> <a name="timeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata"></a>

```java
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference getTimeBasedValidationMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a>

---

##### `timeBasedValidationMetadataInput`<sup>Optional</sup> <a name="timeBasedValidationMetadataInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput"></a>

```java
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata getTimeBasedValidationMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue"></a>

```java
public GoogleComputeRolloutPlanWavesValidation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---


### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_rollout_plan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference;

new GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration">resetWaitDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWaitDuration` <a name="resetWaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration"></a>

```java
public void resetWaitDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput">waitDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration">waitDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `waitDurationInput`<sup>Optional</sup> <a name="waitDurationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput"></a>

```java
public java.lang.String getWaitDurationInput();
```

- *Type:* java.lang.String

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration"></a>

```java
public java.lang.String getWaitDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue"></a>

```java
public GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---



