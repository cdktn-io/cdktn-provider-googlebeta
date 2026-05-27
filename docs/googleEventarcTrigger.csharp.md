# `googleEventarcTrigger` Submodule <a name="`googleEventarcTrigger` Submodule" id="@cdktn/provider-google-beta.googleEventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcTrigger <a name="GoogleEventarcTrigger" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTrigger(Construct Scope, string Id, GoogleEventarcTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig">GoogleEventarcTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig">GoogleEventarcTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria">PutMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport">PutTransport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType">ResetEventDataContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport">ResetTransport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination"></a>

```csharp
private void PutDestination(GoogleEventarcTriggerDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---

##### `PutMatchingCriteria` <a name="PutMatchingCriteria" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria"></a>

```csharp
private void PutMatchingCriteria(IResolvable|GoogleEventarcTriggerMatchingCriteria[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>[]

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(GoogleEventarcTriggerRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy">GoogleEventarcTriggerRetryPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleEventarcTriggerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

---

##### `PutTransport` <a name="PutTransport" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport"></a>

```csharp
private void PutTransport(GoogleEventarcTriggerTransport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEventDataContentType` <a name="ResetEventDataContentType" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType"></a>

```csharp
private void ResetEventDataContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransport` <a name="ResetTransport" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport"></a>

```csharp
private void ResetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleEventarcTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleEventarcTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleEventarcTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleEventarcTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleEventarcTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleEventarcTrigger resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEventarcTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleEventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions">Conditions</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria">MatchingCriteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference">GoogleEventarcTriggerRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport">Transport</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput">EventDataContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput">MatchingCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy">GoogleEventarcTriggerRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput">TransportInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType">EventDataContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions"></a>

```csharp
public StringMap Conditions { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination"></a>

```csharp
public GoogleEventarcTriggerDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria"></a>

```csharp
public GoogleEventarcTriggerMatchingCriteriaList MatchingCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.retryPolicy"></a>

```csharp
public GoogleEventarcTriggerRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference">GoogleEventarcTriggerRetryPolicyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts"></a>

```csharp
public GoogleEventarcTriggerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a>

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport"></a>

```csharp
public GoogleEventarcTriggerTransportOutputReference Transport { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput"></a>

```csharp
public GoogleEventarcTriggerDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---

##### `EventDataContentTypeInput`<sup>Optional</sup> <a name="EventDataContentTypeInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput"></a>

```csharp
public string EventDataContentTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MatchingCriteriaInput`<sup>Optional</sup> <a name="MatchingCriteriaInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput"></a>

```csharp
public IResolvable|GoogleEventarcTriggerMatchingCriteria[] MatchingCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.retryPolicyInput"></a>

```csharp
public GoogleEventarcTriggerRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy">GoogleEventarcTriggerRetryPolicy</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleEventarcTriggerTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput"></a>

```csharp
public GoogleEventarcTriggerTransport TransportInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EventDataContentType`<sup>Required</sup> <a name="EventDataContentType" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType"></a>

```csharp
public string EventDataContentType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcTriggerConfig <a name="GoogleEventarcTriggerConfig" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleEventarcTriggerDestination Destination,
    string Location,
    IResolvable|GoogleEventarcTriggerMatchingCriteria[] MatchingCriteria,
    string Name,
    string Channel = null,
    string DeletionPolicy = null,
    string EventDataContentType = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleEventarcTriggerRetryPolicy RetryPolicy = null,
    string ServiceAccount = null,
    GoogleEventarcTriggerTimeouts Timeouts = null,
    GoogleEventarcTriggerTransport Transport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria">MatchingCriteria</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>[]</code> | matching_criteria block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name">Name</a></code> | <code>string</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel">Channel</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType">EventDataContentType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#project GoogleEventarcTrigger#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy">GoogleEventarcTriggerRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport">Transport</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | transport block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination"></a>

```csharp
public GoogleEventarcTriggerDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#destination GoogleEventarcTrigger#destination}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `MatchingCriteria`<sup>Required</sup> <a name="MatchingCriteria" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria"></a>

```csharp
public IResolvable|GoogleEventarcTriggerMatchingCriteria[] MatchingCriteria { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>[]

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#matching_criteria GoogleEventarcTrigger#matching_criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#name GoogleEventarcTrigger#name}

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Optional.

The name of the channel associated with the trigger in 'projects/{project}/locations/{location}/channels/{channel}' format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#channel GoogleEventarcTrigger#channel}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#deletion_policy GoogleEventarcTrigger#deletion_policy}

---

##### `EventDataContentType`<sup>Optional</sup> <a name="EventDataContentType" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType"></a>

```csharp
public string EventDataContentType { get; set; }
```

- *Type:* string

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to 'application/json' if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#event_data_content_type GoogleEventarcTrigger#event_data_content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#labels GoogleEventarcTrigger#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#project GoogleEventarcTrigger#project}.

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.retryPolicy"></a>

```csharp
public GoogleEventarcTriggerRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy">GoogleEventarcTriggerRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#retry_policy GoogleEventarcTrigger#retry_policy}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have 'iam.serviceAccounts.actAs' permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have 'roles/eventarc.eventReceiver' IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#service_account GoogleEventarcTrigger#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts"></a>

```csharp
public GoogleEventarcTriggerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#timeouts GoogleEventarcTrigger#timeouts}

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport"></a>

```csharp
public GoogleEventarcTriggerTransport Transport { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#transport GoogleEventarcTrigger#transport}

---

### GoogleEventarcTriggerDestination <a name="GoogleEventarcTriggerDestination" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestination {
    GoogleEventarcTriggerDestinationCloudRunService CloudRunService = null,
    GoogleEventarcTriggerDestinationGke Gke = null,
    GoogleEventarcTriggerDestinationHttpEndpoint HttpEndpoint = null,
    GoogleEventarcTriggerDestinationNetworkConfig NetworkConfig = null,
    string Workflow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke">Gke</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow">Workflow</a></code> | <code>string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `CloudRunService`<sup>Optional</sup> <a name="CloudRunService" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService"></a>

```csharp
public GoogleEventarcTriggerDestinationCloudRunService CloudRunService { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#cloud_run_service GoogleEventarcTrigger#cloud_run_service}

---

##### `Gke`<sup>Optional</sup> <a name="Gke" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke"></a>

```csharp
public GoogleEventarcTriggerDestinationGke Gke { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#gke GoogleEventarcTrigger#gke}

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint"></a>

```csharp
public GoogleEventarcTriggerDestinationHttpEndpoint HttpEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#http_endpoint GoogleEventarcTrigger#http_endpoint}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig"></a>

```csharp
public GoogleEventarcTriggerDestinationNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#network_config GoogleEventarcTrigger#network_config}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow"></a>

```csharp
public string Workflow { get; set; }
```

- *Type:* string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: 'projects/{project}/locations/{location}/workflows/{workflow}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#workflow GoogleEventarcTrigger#workflow}

---

### GoogleEventarcTriggerDestinationCloudRunService <a name="GoogleEventarcTriggerDestinationCloudRunService" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationCloudRunService {
    string Service,
    string Path = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service">Service</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path">Path</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region">Region</a></code> | <code>string</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#region GoogleEventarcTrigger#region}

---

### GoogleEventarcTriggerDestinationGke <a name="GoogleEventarcTriggerDestinationGke" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationGke {
    string Cluster,
    string Location,
    string Namespace,
    string Service,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster">Cluster</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location">Location</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace">Namespace</a></code> | <code>string</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service">Service</a></code> | <code>string</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path">Path</a></code> | <code>string</code> | Optional. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#cluster GoogleEventarcTrigger#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#namespace GoogleEventarcTrigger#namespace}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

### GoogleEventarcTriggerDestinationHttpEndpoint <a name="GoogleEventarcTriggerDestinationHttpEndpoint" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationHttpEndpoint {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri">Uri</a></code> | <code>string</code> | Required. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: 'http://10.10.10.8:80/route', 'http://svc.us-central1.p.local:8080/'. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#uri GoogleEventarcTrigger#uri}

---

### GoogleEventarcTriggerDestinationNetworkConfig <a name="GoogleEventarcTriggerDestinationNetworkConfig" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationNetworkConfig {
    string NetworkAttachment
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'. |

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#network_attachment GoogleEventarcTrigger#network_attachment}

---

### GoogleEventarcTriggerMatchingCriteria <a name="GoogleEventarcTriggerMatchingCriteria" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerMatchingCriteria {
    string Attribute,
    string Value,
    string Operator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute">Attribute</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value">Value</a></code> | <code>string</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator">Operator</a></code> | <code>string</code> | Optional. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#attribute GoogleEventarcTrigger#attribute}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#value GoogleEventarcTrigger#value}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is 'match-path-pattern'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#operator GoogleEventarcTrigger#operator}

---

### GoogleEventarcTriggerRetryPolicy <a name="GoogleEventarcTriggerRetryPolicy" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerRetryPolicy {
    double MaxAttempts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | The maximum number of delivery attempts for any message. The only valid value is 1. |

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

The maximum number of delivery attempts for any message. The only valid value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#max_attempts GoogleEventarcTrigger#max_attempts}

---

### GoogleEventarcTriggerTimeouts <a name="GoogleEventarcTriggerTimeouts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}.

---

### GoogleEventarcTriggerTransport <a name="GoogleEventarcTriggerTransport" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerTransport {
    GoogleEventarcTriggerTransportPubsub Pubsub = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `Pubsub`<sup>Optional</sup> <a name="Pubsub" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub"></a>

```csharp
public GoogleEventarcTriggerTransportPubsub Pubsub { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#pubsub GoogleEventarcTrigger#pubsub}

---

### GoogleEventarcTriggerTransportPubsub <a name="GoogleEventarcTriggerTransportPubsub" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerTransportPubsub {
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic">Topic</a></code> | <code>string</code> | Optional. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: 'projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished' only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_eventarc_trigger#topic GoogleEventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcTriggerDestinationCloudRunServiceOutputReference <a name="GoogleEventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationCloudRunServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerDestinationCloudRunService InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---


### GoogleEventarcTriggerDestinationGkeOutputReference <a name="GoogleEventarcTriggerDestinationGkeOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationGkeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerDestinationGke InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---


### GoogleEventarcTriggerDestinationHttpEndpointOutputReference <a name="GoogleEventarcTriggerDestinationHttpEndpointOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationHttpEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerDestinationHttpEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---


### GoogleEventarcTriggerDestinationNetworkConfigOutputReference <a name="GoogleEventarcTriggerDestinationNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerDestinationNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---


### GoogleEventarcTriggerDestinationOutputReference <a name="GoogleEventarcTriggerDestinationOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService">PutCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke">PutGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint">PutHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService">ResetCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke">ResetGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudRunService` <a name="PutCloudRunService" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```csharp
private void PutCloudRunService(GoogleEventarcTriggerDestinationCloudRunService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---

##### `PutGke` <a name="PutGke" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke"></a>

```csharp
private void PutGke(GoogleEventarcTriggerDestinationGke Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---

##### `PutHttpEndpoint` <a name="PutHttpEndpoint" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint"></a>

```csharp
private void PutHttpEndpoint(GoogleEventarcTriggerDestinationHttpEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(GoogleEventarcTriggerDestinationNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---

##### `ResetCloudRunService` <a name="ResetCloudRunService" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```csharp
private void ResetCloudRunService()
```

##### `ResetGke` <a name="ResetGke" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke"></a>

```csharp
private void ResetGke()
```

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```csharp
private void ResetWorkflow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction">CloudFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService">CloudRunService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke">Gke</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">CloudRunServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput">GkeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow">Workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```csharp
public string CloudFunction { get; }
```

- *Type:* string

---

##### `CloudRunService`<sup>Required</sup> <a name="CloudRunService" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```csharp
public GoogleEventarcTriggerDestinationCloudRunServiceOutputReference CloudRunService { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `Gke`<sup>Required</sup> <a name="Gke" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke"></a>

```csharp
public GoogleEventarcTriggerDestinationGkeOutputReference Gke { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a>

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint"></a>

```csharp
public GoogleEventarcTriggerDestinationHttpEndpointOutputReference HttpEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig"></a>

```csharp
public GoogleEventarcTriggerDestinationNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a>

---

##### `CloudRunServiceInput`<sup>Optional</sup> <a name="CloudRunServiceInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```csharp
public GoogleEventarcTriggerDestinationCloudRunService CloudRunServiceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---

##### `GkeInput`<sup>Optional</sup> <a name="GkeInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```csharp
public GoogleEventarcTriggerDestinationGke GkeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput"></a>

```csharp
public GoogleEventarcTriggerDestinationHttpEndpoint HttpEndpointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput"></a>

```csharp
public GoogleEventarcTriggerDestinationNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```csharp
public string WorkflowInput { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow"></a>

```csharp
public string Workflow { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---


### GoogleEventarcTriggerMatchingCriteriaList <a name="GoogleEventarcTriggerMatchingCriteriaList" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerMatchingCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get"></a>

```csharp
private GoogleEventarcTriggerMatchingCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```csharp
public IResolvable|GoogleEventarcTriggerMatchingCriteria[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>[]

---


### GoogleEventarcTriggerMatchingCriteriaOutputReference <a name="GoogleEventarcTriggerMatchingCriteriaOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerMatchingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleEventarcTriggerMatchingCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>

---


### GoogleEventarcTriggerRetryPolicyOutputReference <a name="GoogleEventarcTriggerRetryPolicyOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.resetMaxAttempts"></a>

```csharp
private void ResetMaxAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy">GoogleEventarcTriggerRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerRetryPolicy">GoogleEventarcTriggerRetryPolicy</a>

---


### GoogleEventarcTriggerTimeoutsOutputReference <a name="GoogleEventarcTriggerTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleEventarcTriggerTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

---


### GoogleEventarcTriggerTransportOutputReference <a name="GoogleEventarcTriggerTransportOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerTransportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub">PutPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub">ResetPubsub</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsub` <a name="PutPubsub" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub"></a>

```csharp
private void PutPubsub(GoogleEventarcTriggerTransportPubsub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---

##### `ResetPubsub` <a name="ResetPubsub" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub"></a>

```csharp
private void ResetPubsub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub">Pubsub</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput">PubsubInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pubsub`<sup>Required</sup> <a name="Pubsub" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub"></a>

```csharp
public GoogleEventarcTriggerTransportPubsubOutputReference Pubsub { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a>

---

##### `PubsubInput`<sup>Optional</sup> <a name="PubsubInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```csharp
public GoogleEventarcTriggerTransportPubsub PubsubInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerTransport InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---


### GoogleEventarcTriggerTransportPubsubOutputReference <a name="GoogleEventarcTriggerTransportPubsubOutputReference" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleEventarcTriggerTransportPubsubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription">Subscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```csharp
public string Subscription { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```csharp
public GoogleEventarcTriggerTransportPubsub InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---



