# `googleNetworkSecurityUllMirroringCollector` Submodule <a name="`googleNetworkSecurityUllMirroringCollector` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUllMirroringCollector <a name="GoogleNetworkSecurityUllMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector google_network_security_ull_mirroring_collector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityUllMirroringCollector(Construct Scope, string Id, GoogleNetworkSecurityUllMirroringCollectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig">GoogleNetworkSecurityUllMirroringCollectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig">GoogleNetworkSecurityUllMirroringCollectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityUllMirroringCollectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityUllMirroringCollector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityUllMirroringCollector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityUllMirroringCollector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecurityUllMirroringCollector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityUllMirroringCollector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityUllMirroringCollector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUllMirroringCollector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.reconciling">Reconciling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput">UllMirroringCollectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId">UllMirroringCollectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRuleInput"></a>

```csharp
public string ForwardingRuleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkSecurityUllMirroringCollectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

---

##### `UllMirroringCollectorIdInput`<sup>Optional</sup> <a name="UllMirroringCollectorIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput"></a>

```csharp
public string UllMirroringCollectorIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `UllMirroringCollectorId`<sup>Required</sup> <a name="UllMirroringCollectorId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId"></a>

```csharp
public string UllMirroringCollectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUllMirroringCollectorConfig <a name="GoogleNetworkSecurityUllMirroringCollectorConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityUllMirroringCollectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Engine,
    string ForwardingRule,
    string Location,
    string UllMirroringCollectorId,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkSecurityUllMirroringCollectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.engine">Engine</a></code> | <code>string</code> | The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.location">Location</a></code> | <code>string</code> | The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId">UllMirroringCollectorId</a></code> | <code>string</code> | The ID to use for the new collector, which will become the final component of the collector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#engine GoogleNetworkSecurityUllMirroringCollector#engine}

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; set; }
```

- *Type:* string

The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#forwarding_rule GoogleNetworkSecurityUllMirroringCollector#forwarding_rule}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#location GoogleNetworkSecurityUllMirroringCollector#location}

---

##### `UllMirroringCollectorId`<sup>Required</sup> <a name="UllMirroringCollectorId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId"></a>

```csharp
public string UllMirroringCollectorId { get; set; }
```

- *Type:* string

The ID to use for the new collector, which will become the final component of the collector's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#ull_mirroring_collector_id GoogleNetworkSecurityUllMirroringCollector#ull_mirroring_collector_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#deletion_policy GoogleNetworkSecurityUllMirroringCollector#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#labels GoogleNetworkSecurityUllMirroringCollector#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityUllMirroringCollectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#timeouts GoogleNetworkSecurityUllMirroringCollector#timeouts}

---

### GoogleNetworkSecurityUllMirroringCollectorTimeouts <a name="GoogleNetworkSecurityUllMirroringCollectorTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityUllMirroringCollectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#create GoogleNetworkSecurityUllMirroringCollector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#delete GoogleNetworkSecurityUllMirroringCollector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#update GoogleNetworkSecurityUllMirroringCollector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#create GoogleNetworkSecurityUllMirroringCollector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#delete GoogleNetworkSecurityUllMirroringCollector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_ull_mirroring_collector#update GoogleNetworkSecurityUllMirroringCollector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkSecurityUllMirroringCollectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

---



