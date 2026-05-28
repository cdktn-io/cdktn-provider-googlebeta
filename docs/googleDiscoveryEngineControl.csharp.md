# `googleDiscoveryEngineControl` Submodule <a name="`googleDiscoveryEngineControl` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineControl <a name="GoogleDiscoveryEngineControl" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control google_discovery_engine_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControl(Construct Scope, string Id, GoogleDiscoveryEngineControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig">GoogleDiscoveryEngineControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig">GoogleDiscoveryEngineControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction">PutBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction">PutFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction">PutPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction">PutRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction">PutSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetBoostAction">ResetBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetCollectionId">ResetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetFilterAction">ResetFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetPromoteAction">ResetPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetRedirectAction">ResetRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetSynonymsAction">ResetSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetUseCases">ResetUseCases</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBoostAction` <a name="PutBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction"></a>

```csharp
private void PutBoostAction(GoogleDiscoveryEngineControlBoostAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions"></a>

```csharp
private void PutConditions(IResolvable|GoogleDiscoveryEngineControlConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

---

##### `PutFilterAction` <a name="PutFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction"></a>

```csharp
private void PutFilterAction(GoogleDiscoveryEngineControlFilterAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---

##### `PutPromoteAction` <a name="PutPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction"></a>

```csharp
private void PutPromoteAction(GoogleDiscoveryEngineControlPromoteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---

##### `PutRedirectAction` <a name="PutRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction"></a>

```csharp
private void PutRedirectAction(GoogleDiscoveryEngineControlRedirectAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---

##### `PutSynonymsAction` <a name="PutSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction"></a>

```csharp
private void PutSynonymsAction(GoogleDiscoveryEngineControlSynonymsAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDiscoveryEngineControlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---

##### `ResetBoostAction` <a name="ResetBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetBoostAction"></a>

```csharp
private void ResetBoostAction()
```

##### `ResetCollectionId` <a name="ResetCollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetCollectionId"></a>

```csharp
private void ResetCollectionId()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetFilterAction` <a name="ResetFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetFilterAction"></a>

```csharp
private void ResetFilterAction()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPromoteAction` <a name="ResetPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetPromoteAction"></a>

```csharp
private void ResetPromoteAction()
```

##### `ResetRedirectAction` <a name="ResetRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetRedirectAction"></a>

```csharp
private void ResetRedirectAction()
```

##### `ResetSynonymsAction` <a name="ResetSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetSynonymsAction"></a>

```csharp
private void ResetSynonymsAction()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseCases` <a name="ResetUseCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetUseCases"></a>

```csharp
private void ResetUseCases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDiscoveryEngineControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostAction">BoostAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference">GoogleDiscoveryEngineControlBoostActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList">GoogleDiscoveryEngineControlConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterAction">FilterAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference">GoogleDiscoveryEngineControlFilterActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteAction">PromoteAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference">GoogleDiscoveryEngineControlPromoteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectAction">RedirectAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference">GoogleDiscoveryEngineControlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsAction">SynonymsAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference">GoogleDiscoveryEngineControlSynonymsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference">GoogleDiscoveryEngineControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostActionInput">BoostActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlIdInput">ControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineIdInput">EngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterActionInput">FilterActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteActionInput">PromoteActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectActionInput">RedirectActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionTypeInput">SolutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsActionInput">SynonymsActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCasesInput">UseCasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlId">ControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineId">EngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionType">SolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCases">UseCases</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BoostAction`<sup>Required</sup> <a name="BoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostAction"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionOutputReference BoostAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference">GoogleDiscoveryEngineControlBoostActionOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditions"></a>

```csharp
public GoogleDiscoveryEngineControlConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList">GoogleDiscoveryEngineControlConditionsList</a>

---

##### `FilterAction`<sup>Required</sup> <a name="FilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterAction"></a>

```csharp
public GoogleDiscoveryEngineControlFilterActionOutputReference FilterAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference">GoogleDiscoveryEngineControlFilterActionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PromoteAction`<sup>Required</sup> <a name="PromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteAction"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteActionOutputReference PromoteAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference">GoogleDiscoveryEngineControlPromoteActionOutputReference</a>

---

##### `RedirectAction`<sup>Required</sup> <a name="RedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectAction"></a>

```csharp
public GoogleDiscoveryEngineControlRedirectActionOutputReference RedirectAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference">GoogleDiscoveryEngineControlRedirectActionOutputReference</a>

---

##### `SynonymsAction`<sup>Required</sup> <a name="SynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsAction"></a>

```csharp
public GoogleDiscoveryEngineControlSynonymsActionOutputReference SynonymsAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference">GoogleDiscoveryEngineControlSynonymsActionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineControlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference">GoogleDiscoveryEngineControlTimeoutsOutputReference</a>

---

##### `BoostActionInput`<sup>Optional</sup> <a name="BoostActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostActionInput"></a>

```csharp
public GoogleDiscoveryEngineControlBoostAction BoostActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditionsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

---

##### `ControlIdInput`<sup>Optional</sup> <a name="ControlIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlIdInput"></a>

```csharp
public string ControlIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineIdInput"></a>

```csharp
public string EngineIdInput { get; }
```

- *Type:* string

---

##### `FilterActionInput`<sup>Optional</sup> <a name="FilterActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterActionInput"></a>

```csharp
public GoogleDiscoveryEngineControlFilterAction FilterActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PromoteActionInput`<sup>Optional</sup> <a name="PromoteActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteActionInput"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteAction PromoteActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---

##### `RedirectActionInput`<sup>Optional</sup> <a name="RedirectActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectActionInput"></a>

```csharp
public GoogleDiscoveryEngineControlRedirectAction RedirectActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---

##### `SolutionTypeInput`<sup>Optional</sup> <a name="SolutionTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionTypeInput"></a>

```csharp
public string SolutionTypeInput { get; }
```

- *Type:* string

---

##### `SynonymsActionInput`<sup>Optional</sup> <a name="SynonymsActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsActionInput"></a>

```csharp
public GoogleDiscoveryEngineControlSynonymsAction SynonymsActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---

##### `UseCasesInput`<sup>Optional</sup> <a name="UseCasesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCasesInput"></a>

```csharp
public string[] UseCasesInput { get; }
```

- *Type:* string[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlId"></a>

```csharp
public string ControlId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineId"></a>

```csharp
public string EngineId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SolutionType`<sup>Required</sup> <a name="SolutionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionType"></a>

```csharp
public string SolutionType { get; }
```

- *Type:* string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCases"></a>

```csharp
public string[] UseCases { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineControlBoostAction <a name="GoogleDiscoveryEngineControlBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlBoostAction {
    string DataStore,
    string Filter,
    double FixedBoost = null,
    GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec InterpolationBoostSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.dataStore">DataStore</a></code> | <code>string</code> | The data store to boost. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.filter">Filter</a></code> | <code>string</code> | The filter to apply to the search results. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.fixedBoost">FixedBoost</a></code> | <code>double</code> | The fixed boost value to apply to the search results. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.interpolationBoostSpec">InterpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | interpolation_boost_spec block. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.dataStore"></a>

```csharp
public string DataStore { get; set; }
```

- *Type:* string

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#filter GoogleDiscoveryEngineControl#filter}

---

##### `FixedBoost`<sup>Optional</sup> <a name="FixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.fixedBoost"></a>

```csharp
public double FixedBoost { get; set; }
```

- *Type:* double

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#fixed_boost GoogleDiscoveryEngineControl#fixed_boost}

---

##### `InterpolationBoostSpec`<sup>Optional</sup> <a name="InterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.interpolationBoostSpec"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec InterpolationBoostSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#interpolation_boost_spec GoogleDiscoveryEngineControl#interpolation_boost_spec}

---

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec {
    string AttributeType = null,
    GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint ControlPoint = null,
    string FieldName = null,
    string InterpolationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType">AttributeType</a></code> | <code>string</code> | The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint">ControlPoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | control_point block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType">InterpolationType</a></code> | <code>string</code> | The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]. |

---

##### `AttributeType`<sup>Optional</sup> <a name="AttributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType"></a>

```csharp
public string AttributeType { get; set; }
```

- *Type:* string

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#attribute_type GoogleDiscoveryEngineControl#attribute_type}

---

##### `ControlPoint`<sup>Optional</sup> <a name="ControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint ControlPoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#control_point GoogleDiscoveryEngineControl#control_point}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#field_name GoogleDiscoveryEngineControl#field_name}

---

##### `InterpolationType`<sup>Optional</sup> <a name="InterpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType"></a>

```csharp
public string InterpolationType { get; set; }
```

- *Type:* string

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#interpolation_type GoogleDiscoveryEngineControl#interpolation_type}

---

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint {
    string AttributeValue = null,
    double BoostAmount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The attribute value of the control point. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount">BoostAmount</a></code> | <code>double</code> | The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above. |

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#attribute_value GoogleDiscoveryEngineControl#attribute_value}

---

##### `BoostAmount`<sup>Optional</sup> <a name="BoostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount"></a>

```csharp
public double BoostAmount { get; set; }
```

- *Type:* double

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#boost_amount GoogleDiscoveryEngineControl#boost_amount}

---

### GoogleDiscoveryEngineControlConditions <a name="GoogleDiscoveryEngineControlConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditions {
    IResolvable|GoogleDiscoveryEngineControlConditionsActiveTimeRange[] ActiveTimeRange = null,
    string QueryRegex = null,
    IResolvable|GoogleDiscoveryEngineControlConditionsQueryTerms[] QueryTerms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.activeTimeRange">ActiveTimeRange</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | active_time_range block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryRegex">QueryRegex</a></code> | <code>string</code> | The regular expression that the query must match for this condition to be met. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryTerms">QueryTerms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]</code> | query_terms block. |

---

##### `ActiveTimeRange`<sup>Optional</sup> <a name="ActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.activeTimeRange"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsActiveTimeRange[] ActiveTimeRange { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

active_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#active_time_range GoogleDiscoveryEngineControl#active_time_range}

---

##### `QueryRegex`<sup>Optional</sup> <a name="QueryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryRegex"></a>

```csharp
public string QueryRegex { get; set; }
```

- *Type:* string

The regular expression that the query must match for this condition to be met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#query_regex GoogleDiscoveryEngineControl#query_regex}

---

##### `QueryTerms`<sup>Optional</sup> <a name="QueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryTerms"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsQueryTerms[] QueryTerms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

query_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#query_terms GoogleDiscoveryEngineControl#query_terms}

---

### GoogleDiscoveryEngineControlConditionsActiveTimeRange <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsActiveTimeRange {
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.endTime">EndTime</a></code> | <code>string</code> | The end time of the active time range. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.startTime">StartTime</a></code> | <code>string</code> | The start time of the active time range. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The end time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#end_time GoogleDiscoveryEngineControl#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The start time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#start_time GoogleDiscoveryEngineControl#start_time}

---

### GoogleDiscoveryEngineControlConditionsQueryTerms <a name="GoogleDiscoveryEngineControlConditionsQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsQueryTerms {
    bool|IResolvable FullMatch = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.fullMatch">FullMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the query term must be an exact match. Otherwise, the query term can be a partial match. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.value">Value</a></code> | <code>string</code> | The value of the query term. |

---

##### `FullMatch`<sup>Optional</sup> <a name="FullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.fullMatch"></a>

```csharp
public bool|IResolvable FullMatch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the query term must be an exact match. Otherwise, the query term can be a partial match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#full_match GoogleDiscoveryEngineControl#full_match}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the query term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#value GoogleDiscoveryEngineControl#value}

---

### GoogleDiscoveryEngineControlConfig <a name="GoogleDiscoveryEngineControlConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ControlId,
    string DisplayName,
    string EngineId,
    string Location,
    string SolutionType,
    GoogleDiscoveryEngineControlBoostAction BoostAction = null,
    string CollectionId = null,
    IResolvable|GoogleDiscoveryEngineControlConditions[] Conditions = null,
    string DeletionPolicy = null,
    GoogleDiscoveryEngineControlFilterAction FilterAction = null,
    string Id = null,
    string Project = null,
    GoogleDiscoveryEngineControlPromoteAction PromoteAction = null,
    GoogleDiscoveryEngineControlRedirectAction RedirectAction = null,
    GoogleDiscoveryEngineControlSynonymsAction SynonymsAction = null,
    GoogleDiscoveryEngineControlTimeouts Timeouts = null,
    string[] UseCases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.controlId">ControlId</a></code> | <code>string</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.engineId">EngineId</a></code> | <code>string</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.solutionType">SolutionType</a></code> | <code>string</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.boostAction">BoostAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.filterAction">FilterAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.promoteAction">PromoteAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.redirectAction">RedirectAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.synonymsAction">SynonymsAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.useCases">UseCases</a></code> | <code>string[]</code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.controlId"></a>

```csharp
public string ControlId { get; set; }
```

- *Type:* string

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#control_id GoogleDiscoveryEngineControl#control_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#display_name GoogleDiscoveryEngineControl#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.engineId"></a>

```csharp
public string EngineId { get; set; }
```

- *Type:* string

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#engine_id GoogleDiscoveryEngineControl#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#location GoogleDiscoveryEngineControl#location}

---

##### `SolutionType`<sup>Required</sup> <a name="SolutionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.solutionType"></a>

```csharp
public string SolutionType { get; set; }
```

- *Type:* string

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#solution_type GoogleDiscoveryEngineControl#solution_type}

---

##### `BoostAction`<sup>Optional</sup> <a name="BoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.boostAction"></a>

```csharp
public GoogleDiscoveryEngineControlBoostAction BoostAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#boost_action GoogleDiscoveryEngineControl#boost_action}

---

##### `CollectionId`<sup>Optional</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#collection_id GoogleDiscoveryEngineControl#collection_id}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.conditions"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#conditions GoogleDiscoveryEngineControl#conditions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#deletion_policy GoogleDiscoveryEngineControl#deletion_policy}

---

##### `FilterAction`<sup>Optional</sup> <a name="FilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.filterAction"></a>

```csharp
public GoogleDiscoveryEngineControlFilterAction FilterAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#filter_action GoogleDiscoveryEngineControl#filter_action}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}.

---

##### `PromoteAction`<sup>Optional</sup> <a name="PromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.promoteAction"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteAction PromoteAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#promote_action GoogleDiscoveryEngineControl#promote_action}

---

##### `RedirectAction`<sup>Optional</sup> <a name="RedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.redirectAction"></a>

```csharp
public GoogleDiscoveryEngineControlRedirectAction RedirectAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#redirect_action GoogleDiscoveryEngineControl#redirect_action}

---

##### `SynonymsAction`<sup>Optional</sup> <a name="SynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.synonymsAction"></a>

```csharp
public GoogleDiscoveryEngineControlSynonymsAction SynonymsAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#synonyms_action GoogleDiscoveryEngineControl#synonyms_action}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineControlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#timeouts GoogleDiscoveryEngineControl#timeouts}

---

##### `UseCases`<sup>Optional</sup> <a name="UseCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.useCases"></a>

```csharp
public string[] UseCases { get; set; }
```

- *Type:* string[]

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#use_cases GoogleDiscoveryEngineControl#use_cases}

---

### GoogleDiscoveryEngineControlFilterAction <a name="GoogleDiscoveryEngineControlFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlFilterAction {
    string DataStore,
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.dataStore">DataStore</a></code> | <code>string</code> | The data store to filter. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.filter">Filter</a></code> | <code>string</code> | The filter to apply to the search results. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.dataStore"></a>

```csharp
public string DataStore { get; set; }
```

- *Type:* string

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#filter GoogleDiscoveryEngineControl#filter}

---

### GoogleDiscoveryEngineControlPromoteAction <a name="GoogleDiscoveryEngineControlPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlPromoteAction {
    string DataStore,
    GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion SearchLinkPromotion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.dataStore">DataStore</a></code> | <code>string</code> | The data store to promote. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.searchLinkPromotion">SearchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | search_link_promotion block. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.dataStore"></a>

```csharp
public string DataStore { get; set; }
```

- *Type:* string

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `SearchLinkPromotion`<sup>Required</sup> <a name="SearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.searchLinkPromotion"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion SearchLinkPromotion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#search_link_promotion GoogleDiscoveryEngineControl#search_link_promotion}

---

### GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion <a name="GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion {
    string Title,
    string Description = null,
    string Document = null,
    bool|IResolvable Enabled = null,
    string ImageUri = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title">Title</a></code> | <code>string</code> | The title of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description">Description</a></code> | <code>string</code> | The description of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document">Document</a></code> | <code>string</code> | The document to promote. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Return promotions for basic site search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri">ImageUri</a></code> | <code>string</code> | The image URI of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri">Uri</a></code> | <code>string</code> | The URI to promote. |

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#title GoogleDiscoveryEngineControl#title}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#description GoogleDiscoveryEngineControl#description}

---

##### `Document`<sup>Optional</sup> <a name="Document" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document"></a>

```csharp
public string Document { get; set; }
```

- *Type:* string

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#document GoogleDiscoveryEngineControl#document}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#enabled GoogleDiscoveryEngineControl#enabled}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#image_uri GoogleDiscoveryEngineControl#image_uri}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#uri GoogleDiscoveryEngineControl#uri}

---

### GoogleDiscoveryEngineControlRedirectAction <a name="GoogleDiscoveryEngineControlRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlRedirectAction {
    string RedirectUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.property.redirectUri">RedirectUri</a></code> | <code>string</code> | The URI to redirect to. |

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.property.redirectUri"></a>

```csharp
public string RedirectUri { get; set; }
```

- *Type:* string

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#redirect_uri GoogleDiscoveryEngineControl#redirect_uri}

---

### GoogleDiscoveryEngineControlSynonymsAction <a name="GoogleDiscoveryEngineControlSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlSynonymsAction {
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.property.synonyms">Synonyms</a></code> | <code>string[]</code> | The synonyms to apply to the search results. |

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#synonyms GoogleDiscoveryEngineControl#synonyms}

---

### GoogleDiscoveryEngineControlTimeouts <a name="GoogleDiscoveryEngineControlTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#create GoogleDiscoveryEngineControl#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#delete GoogleDiscoveryEngineControl#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#update GoogleDiscoveryEngineControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#create GoogleDiscoveryEngineControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#delete GoogleDiscoveryEngineControl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_control#update GoogleDiscoveryEngineControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount">ResetBoostAmount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetBoostAmount` <a name="ResetBoostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount"></a>

```csharp
private void ResetBoostAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput">BoostAmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount">BoostAmount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `BoostAmountInput`<sup>Optional</sup> <a name="BoostAmountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput"></a>

```csharp
public double BoostAmountInput { get; }
```

- *Type:* double

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `BoostAmount`<sup>Required</sup> <a name="BoostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount"></a>

```csharp
public double BoostAmount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---


### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint">PutControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType">ResetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint">ResetControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType">ResetInterpolationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPoint` <a name="PutControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint"></a>

```csharp
private void PutControlPoint(GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `ResetAttributeType` <a name="ResetAttributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType"></a>

```csharp
private void ResetAttributeType()
```

##### `ResetControlPoint` <a name="ResetControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint"></a>

```csharp
private void ResetControlPoint()
```

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetInterpolationType` <a name="ResetInterpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType"></a>

```csharp
private void ResetInterpolationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint">ControlPoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput">AttributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput">ControlPointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput">InterpolationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType">AttributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType">InterpolationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPoint`<sup>Required</sup> <a name="ControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference ControlPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a>

---

##### `AttributeTypeInput`<sup>Optional</sup> <a name="AttributeTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput"></a>

```csharp
public string AttributeTypeInput { get; }
```

- *Type:* string

---

##### `ControlPointInput`<sup>Optional</sup> <a name="ControlPointInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint ControlPointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `InterpolationTypeInput`<sup>Optional</sup> <a name="InterpolationTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput"></a>

```csharp
public string InterpolationTypeInput { get; }
```

- *Type:* string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType"></a>

```csharp
public string AttributeType { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InterpolationType`<sup>Required</sup> <a name="InterpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType"></a>

```csharp
public string InterpolationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---


### GoogleDiscoveryEngineControlBoostActionOutputReference <a name="GoogleDiscoveryEngineControlBoostActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlBoostActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec">PutInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetFixedBoost">ResetFixedBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec">ResetInterpolationBoostSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterpolationBoostSpec` <a name="PutInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec"></a>

```csharp
private void PutInterpolationBoostSpec(GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `ResetFixedBoost` <a name="ResetFixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetFixedBoost"></a>

```csharp
private void ResetFixedBoost()
```

##### `ResetInterpolationBoostSpec` <a name="ResetInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec"></a>

```csharp
private void ResetInterpolationBoostSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec">InterpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput">FixedBoostInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput">InterpolationBoostSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoost">FixedBoost</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterpolationBoostSpec`<sup>Required</sup> <a name="InterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference InterpolationBoostSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput"></a>

```csharp
public string DataStoreInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FixedBoostInput`<sup>Optional</sup> <a name="FixedBoostInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput"></a>

```csharp
public double FixedBoostInput { get; }
```

- *Type:* double

---

##### `InterpolationBoostSpecInput`<sup>Optional</sup> <a name="InterpolationBoostSpecInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput"></a>

```csharp
public GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec InterpolationBoostSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `FixedBoost`<sup>Required</sup> <a name="FixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoost"></a>

```csharp
public double FixedBoost { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlBoostAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---


### GoogleDiscoveryEngineControlConditionsActiveTimeRangeList <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRangeList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsActiveTimeRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get"></a>

```csharp
private GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsActiveTimeRange[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

---


### GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsActiveTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>

---


### GoogleDiscoveryEngineControlConditionsList <a name="GoogleDiscoveryEngineControlConditionsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get"></a>

```csharp
private GoogleDiscoveryEngineControlConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

---


### GoogleDiscoveryEngineControlConditionsOutputReference <a name="GoogleDiscoveryEngineControlConditionsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange">PutActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms">PutQueryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange">ResetActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryRegex">ResetQueryRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryTerms">ResetQueryTerms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveTimeRange` <a name="PutActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange"></a>

```csharp
private void PutActiveTimeRange(IResolvable|GoogleDiscoveryEngineControlConditionsActiveTimeRange[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

---

##### `PutQueryTerms` <a name="PutQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms"></a>

```csharp
private void PutQueryTerms(IResolvable|GoogleDiscoveryEngineControlConditionsQueryTerms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

---

##### `ResetActiveTimeRange` <a name="ResetActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange"></a>

```csharp
private void ResetActiveTimeRange()
```

##### `ResetQueryRegex` <a name="ResetQueryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryRegex"></a>

```csharp
private void ResetQueryRegex()
```

##### `ResetQueryTerms` <a name="ResetQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryTerms"></a>

```csharp
private void ResetQueryTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRange">ActiveTimeRange</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList">GoogleDiscoveryEngineControlConditionsActiveTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTerms">QueryTerms</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList">GoogleDiscoveryEngineControlConditionsQueryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput">ActiveTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegexInput">QueryRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTermsInput">QueryTermsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegex">QueryRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveTimeRange`<sup>Required</sup> <a name="ActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRange"></a>

```csharp
public GoogleDiscoveryEngineControlConditionsActiveTimeRangeList ActiveTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList">GoogleDiscoveryEngineControlConditionsActiveTimeRangeList</a>

---

##### `QueryTerms`<sup>Required</sup> <a name="QueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTerms"></a>

```csharp
public GoogleDiscoveryEngineControlConditionsQueryTermsList QueryTerms { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList">GoogleDiscoveryEngineControlConditionsQueryTermsList</a>

---

##### `ActiveTimeRangeInput`<sup>Optional</sup> <a name="ActiveTimeRangeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsActiveTimeRange[] ActiveTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

---

##### `QueryRegexInput`<sup>Optional</sup> <a name="QueryRegexInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegexInput"></a>

```csharp
public string QueryRegexInput { get; }
```

- *Type:* string

---

##### `QueryTermsInput`<sup>Optional</sup> <a name="QueryTermsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTermsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsQueryTerms[] QueryTermsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

---

##### `QueryRegex`<sup>Required</sup> <a name="QueryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegex"></a>

```csharp
public string QueryRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>

---


### GoogleDiscoveryEngineControlConditionsQueryTermsList <a name="GoogleDiscoveryEngineControlConditionsQueryTermsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsQueryTermsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get"></a>

```csharp
private GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsQueryTerms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

---


### GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference <a name="GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch">ResetFullMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullMatch` <a name="ResetFullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch"></a>

```csharp
private void ResetFullMatch()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput">FullMatchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch">FullMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FullMatchInput`<sup>Optional</sup> <a name="FullMatchInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput"></a>

```csharp
public bool|IResolvable FullMatchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `FullMatch`<sup>Required</sup> <a name="FullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch"></a>

```csharp
public bool|IResolvable FullMatch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlConditionsQueryTerms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>

---


### GoogleDiscoveryEngineControlFilterActionOutputReference <a name="GoogleDiscoveryEngineControlFilterActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlFilterActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput"></a>

```csharp
public string DataStoreInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlFilterAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---


### GoogleDiscoveryEngineControlPromoteActionOutputReference <a name="GoogleDiscoveryEngineControlPromoteActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlPromoteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion">PutSearchLinkPromotion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSearchLinkPromotion` <a name="PutSearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion"></a>

```csharp
private void PutSearchLinkPromotion(GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion">SearchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput">SearchLinkPromotionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SearchLinkPromotion`<sup>Required</sup> <a name="SearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference SearchLinkPromotion { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput"></a>

```csharp
public string DataStoreInput { get; }
```

- *Type:* string

---

##### `SearchLinkPromotionInput`<sup>Optional</sup> <a name="SearchLinkPromotionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion SearchLinkPromotionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---


### GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference <a name="GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument">ResetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocument` <a name="ResetDocument" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument"></a>

```csharp
private void ResetDocument()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput">DocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document">Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput"></a>

```csharp
public string DocumentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document"></a>

```csharp
public string Document { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


### GoogleDiscoveryEngineControlRedirectActionOutputReference <a name="GoogleDiscoveryEngineControlRedirectActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlRedirectActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput"></a>

```csharp
public string RedirectUriInput { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlRedirectAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---


### GoogleDiscoveryEngineControlSynonymsActionOutputReference <a name="GoogleDiscoveryEngineControlSynonymsActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlSynonymsActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineControlSynonymsAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---


### GoogleDiscoveryEngineControlTimeoutsOutputReference <a name="GoogleDiscoveryEngineControlTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineControlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineControlTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---



