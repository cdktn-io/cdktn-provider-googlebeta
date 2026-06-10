# `googleApigeeEnvironmentApiRevisionDeployment` Submodule <a name="`googleApigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentApiRevisionDeployment <a name="GoogleApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentApiRevisionDeployment(Construct Scope, string Id, GoogleApigeeEnvironmentApiRevisionDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig">GoogleApigeeEnvironmentApiRevisionDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig">GoogleApigeeEnvironmentApiRevisionDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">ResetSequencedRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```csharp
private void ResetOverride()
```

##### `ResetSequencedRollout` <a name="ResetSequencedRollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```csharp
private void ResetSequencedRollout()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentApiRevisionDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentApiRevisionDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentApiRevisionDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentApiRevisionDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeEnvironmentApiRevisionDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.basepaths">Basepaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">DeployStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.overrideInput">OverrideInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">SequencedRolloutInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.override">Override</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">SequencedRollout</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Basepaths`<sup>Required</sup> <a name="Basepaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```csharp
public string[] Basepaths { get; }
```

- *Type:* string[]

---

##### `DeployStartTime`<sup>Required</sup> <a name="DeployStartTime" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```csharp
public string DeployStartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```csharp
public GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```csharp
public bool|IResolvable OverrideInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `SequencedRolloutInput`<sup>Optional</sup> <a name="SequencedRolloutInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```csharp
public bool|IResolvable SequencedRolloutInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```csharp
public bool|IResolvable Override { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `SequencedRollout`<sup>Required</sup> <a name="SequencedRollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```csharp
public bool|IResolvable SequencedRollout { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentApiRevisionDeploymentConfig <a name="GoogleApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentApiRevisionDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Api,
    string Environment,
    string OrgId,
    double Revision,
    string DeletionPolicy = null,
    string Id = null,
    bool|IResolvable Override = null,
    bool|IResolvable SequencedRollout = null,
    string ServiceAccount = null,
    GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.api">Api</a></code> | <code>string</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">Environment</a></code> | <code>string</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">OrgId</a></code> | <code>string</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">Revision</a></code> | <code>double</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.override">Override</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">SequencedRollout</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#api GoogleApigeeEnvironmentApiRevisionDeployment#api}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#environment GoogleApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#org_id GoogleApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#revision GoogleApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#deletion_policy GoogleApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#id GoogleApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```csharp
public bool|IResolvable Override { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#override GoogleApigeeEnvironmentApiRevisionDeployment#override}

---

##### `SequencedRollout`<sup>Optional</sup> <a name="SequencedRollout" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```csharp
public bool|IResolvable SequencedRollout { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#sequenced_rollout GoogleApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#service_account GoogleApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```csharp
public GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#timeouts GoogleApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#create GoogleApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#delete GoogleApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#create GoogleApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apigee_environment_api_revision_deployment#delete GoogleApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentApiRevisionDeployment.GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts">GoogleApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---



