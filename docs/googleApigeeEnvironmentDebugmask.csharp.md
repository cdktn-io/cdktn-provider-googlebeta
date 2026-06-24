# `googleApigeeEnvironmentDebugmask` Submodule <a name="`googleApigeeEnvironmentDebugmask` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentDebugmask <a name="GoogleApigeeEnvironmentDebugmask" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask google_apigee_environment_debugmask}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentDebugmask(Construct Scope, string Id, GoogleApigeeEnvironmentDebugmaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig">GoogleApigeeEnvironmentDebugmaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig">GoogleApigeeEnvironmentDebugmaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths">ResetFaultXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths">ResetRequestJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths">ResetRequestXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths">ResetResponseJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths">ResetResponseXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeEnvironmentDebugmaskTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `ResetFaultXPaths` <a name="ResetFaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths"></a>

```csharp
private void ResetFaultXPaths()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces"></a>

```csharp
private void ResetNamespaces()
```

##### `ResetRequestJsonPaths` <a name="ResetRequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths"></a>

```csharp
private void ResetRequestJsonPaths()
```

##### `ResetRequestXPaths` <a name="ResetRequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths"></a>

```csharp
private void ResetRequestXPaths()
```

##### `ResetResponseJsonPaths` <a name="ResetResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths"></a>

```csharp
private void ResetResponseJsonPaths()
```

##### `ResetResponseXPaths` <a name="ResetResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths"></a>

```csharp
private void ResetResponseXPaths()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables"></a>

```csharp
private void ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentDebugmask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentDebugmask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentDebugmask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeEnvironmentDebugmask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeEnvironmentDebugmask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeEnvironmentDebugmask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentDebugmask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput">EnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput">FaultXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput">NamespacesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput">RequestJsonPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput">RequestXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput">ResponseJsonPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput">ResponseXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput">VariablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId">EnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths">FaultXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces">Namespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths">RequestJsonPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths">RequestXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths">ResponseJsonPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths">ResponseXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables">Variables</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts"></a>

```csharp
public GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a>

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput"></a>

```csharp
public string EnvIdInput { get; }
```

- *Type:* string

---

##### `FaultXPathsInput`<sup>Optional</sup> <a name="FaultXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput"></a>

```csharp
public string[] FaultXPathsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NamespacesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestJsonPathsInput`<sup>Optional</sup> <a name="RequestJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput"></a>

```csharp
public string[] RequestJsonPathsInput { get; }
```

- *Type:* string[]

---

##### `RequestXPathsInput`<sup>Optional</sup> <a name="RequestXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput"></a>

```csharp
public string[] RequestXPathsInput { get; }
```

- *Type:* string[]

---

##### `ResponseJsonPathsInput`<sup>Optional</sup> <a name="ResponseJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput"></a>

```csharp
public string[] ResponseJsonPathsInput { get; }
```

- *Type:* string[]

---

##### `ResponseXPathsInput`<sup>Optional</sup> <a name="ResponseXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput"></a>

```csharp
public string[] ResponseXPathsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleApigeeEnvironmentDebugmaskTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput"></a>

```csharp
public string[] VariablesInput { get; }
```

- *Type:* string[]

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId"></a>

```csharp
public string EnvId { get; }
```

- *Type:* string

---

##### `FaultXPaths`<sup>Required</sup> <a name="FaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths"></a>

```csharp
public string[] FaultXPaths { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Namespaces { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestJsonPaths`<sup>Required</sup> <a name="RequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths"></a>

```csharp
public string[] RequestJsonPaths { get; }
```

- *Type:* string[]

---

##### `RequestXPaths`<sup>Required</sup> <a name="RequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths"></a>

```csharp
public string[] RequestXPaths { get; }
```

- *Type:* string[]

---

##### `ResponseJsonPaths`<sup>Required</sup> <a name="ResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths"></a>

```csharp
public string[] ResponseJsonPaths { get; }
```

- *Type:* string[]

---

##### `ResponseXPaths`<sup>Required</sup> <a name="ResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths"></a>

```csharp
public string[] ResponseXPaths { get; }
```

- *Type:* string[]

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables"></a>

```csharp
public string[] Variables { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentDebugmaskConfig <a name="GoogleApigeeEnvironmentDebugmaskConfig" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentDebugmaskConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnvId,
    string[] FaultXPaths = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Namespaces = null,
    string[] RequestJsonPaths = null,
    string[] RequestXPaths = null,
    string[] ResponseJsonPaths = null,
    string[] ResponseXPaths = null,
    GoogleApigeeEnvironmentDebugmaskTimeouts Timeouts = null,
    string[] Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId">EnvId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths">FaultXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces">Namespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths">RequestJsonPaths</a></code> | <code>string[]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths">RequestXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths">ResponseJsonPaths</a></code> | <code>string[]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths">ResponseXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables">Variables</a></code> | <code>string[]</code> | List of variables that the debug mask applies to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId"></a>

```csharp
public string EnvId { get; set; }
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#env_id GoogleApigeeEnvironmentDebugmask#env_id}

---

##### `FaultXPaths`<sup>Optional</sup> <a name="FaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths"></a>

```csharp
public string[] FaultXPaths { get; set; }
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#fault_x_paths GoogleApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Namespaces { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#namespaces GoogleApigeeEnvironmentDebugmask#namespaces}

---

##### `RequestJsonPaths`<sup>Optional</sup> <a name="RequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths"></a>

```csharp
public string[] RequestJsonPaths { get; set; }
```

- *Type:* string[]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_json_paths GoogleApigeeEnvironmentDebugmask#request_json_paths}

---

##### `RequestXPaths`<sup>Optional</sup> <a name="RequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths"></a>

```csharp
public string[] RequestXPaths { get; set; }
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_x_paths GoogleApigeeEnvironmentDebugmask#request_x_paths}

---

##### `ResponseJsonPaths`<sup>Optional</sup> <a name="ResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths"></a>

```csharp
public string[] ResponseJsonPaths { get; set; }
```

- *Type:* string[]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_json_paths GoogleApigeeEnvironmentDebugmask#response_json_paths}

---

##### `ResponseXPaths`<sup>Optional</sup> <a name="ResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths"></a>

```csharp
public string[] ResponseXPaths { get; set; }
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_x_paths GoogleApigeeEnvironmentDebugmask#response_x_paths}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts"></a>

```csharp
public GoogleApigeeEnvironmentDebugmaskTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#timeouts GoogleApigeeEnvironmentDebugmask#timeouts}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables"></a>

```csharp
public string[] Variables { get; set; }
```

- *Type:* string[]

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#variables GoogleApigeeEnvironmentDebugmask#variables}

---

### GoogleApigeeEnvironmentDebugmaskTimeouts <a name="GoogleApigeeEnvironmentDebugmaskTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentDebugmaskTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference <a name="GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleApigeeEnvironmentDebugmaskTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---



