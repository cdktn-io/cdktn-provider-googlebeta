# `googleNetworkServicesCdnEdgeExtension` Submodule <a name="`googleNetworkServicesCdnEdgeExtension` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesCdnEdgeExtension <a name="GoogleNetworkServicesCdnEdgeExtension" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension google_network_services_cdn_edge_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtension(Construct Scope, string Id, GoogleNetworkServicesCdnEdgeExtensionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig">GoogleNetworkServicesCdnEdgeExtensionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig">GoogleNetworkServicesCdnEdgeExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains">PutExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionChains` <a name="PutExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains"></a>

```csharp
private void PutExtensionChains(IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChains[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>[]

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget"></a>

```csharp
private void PutTarget(GoogleNetworkServicesCdnEdgeExtensionTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesCdnEdgeExtensionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesCdnEdgeExtension.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesCdnEdgeExtension.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesCdnEdgeExtension.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesCdnEdgeExtension.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesCdnEdgeExtension to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesCdnEdgeExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesCdnEdgeExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains">ExtensionChains</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput">ExtensionChainsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList ExtensionChains { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExtensionChainsInput`<sup>Optional</sup> <a name="ExtensionChainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChains[] ExtensionChainsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesCdnEdgeExtensionConfig <a name="GoogleNetworkServicesCdnEdgeExtensionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChains[] ExtensionChains,
    string Location,
    string Name,
    GoogleNetworkServicesCdnEdgeExtensionTarget Target,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkServicesCdnEdgeExtensionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains">ExtensionChains</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>[]</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location">Location</a></code> | <code>string</code> | The location of the CDN edge extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name">Name</a></code> | <code>string</code> | Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with the CdnEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChains[] ExtensionChains { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>[]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extension_chains GoogleNetworkServicesCdnEdgeExtension#extension_chains}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the CDN edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#location GoogleNetworkServicesCdnEdgeExtension#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionTarget Target { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#target GoogleNetworkServicesCdnEdgeExtension#target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#deletion_policy GoogleNetworkServicesCdnEdgeExtension#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#description GoogleNetworkServicesCdnEdgeExtension#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with the CdnEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#labels GoogleNetworkServicesCdnEdgeExtension#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#timeouts GoogleNetworkServicesCdnEdgeExtension#timeouts}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChains <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChains {
    IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions[] Extensions,
    GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition MatchCondition,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions">Extensions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>[]</code> | extensions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name">Name</a></code> | <code>string</code> | The name for this extension chain. |

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions[] Extensions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>[]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extensions GoogleNetworkServicesCdnEdgeExtension#extensions}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition MatchCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#match_condition GoogleNetworkServicesCdnEdgeExtension#match_condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions {
    string Name,
    string Service,
    bool|IResolvable FailOpen = null,
    string[] ForwardAttributes = null,
    string[] ForwardHeaders = null,
    string[] SupportedEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name">Name</a></code> | <code>string</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service">Service</a></code> | <code>string</code> | The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes">ForwardAttributes</a></code> | <code>string[]</code> | List of the Envoy attributes to forward to the extension server. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders">ForwardHeaders</a></code> | <code>string[]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents">SupportedEvents</a></code> | <code>string[]</code> | A set of events during request or response processing for which this extension is called. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#service GoogleNetworkServicesCdnEdgeExtension#service}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#fail_open GoogleNetworkServicesCdnEdgeExtension#fail_open}

---

##### `ForwardAttributes`<sup>Optional</sup> <a name="ForwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes"></a>

```csharp
public string[] ForwardAttributes { get; set; }
```

- *Type:* string[]

List of the Envoy attributes to forward to the extension server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_attributes GoogleNetworkServicesCdnEdgeExtension#forward_attributes}

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```csharp
public string[] ForwardHeaders { get; set; }
```

- *Type:* string[]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_headers GoogleNetworkServicesCdnEdgeExtension#forward_headers}

---

##### `SupportedEvents`<sup>Optional</sup> <a name="SupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```csharp
public string[] SupportedEvents { get; set; }
```

- *Type:* string[]

A set of events during request or response processing for which this extension is called.

Eligible values are 'REQUEST_HEADERS' and 'RESPONSE_HEADERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#supported_events GoogleNetworkServicesCdnEdgeExtension#supported_events}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition {
    string CelExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression">CelExpression</a></code> | <code>string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```csharp
public string CelExpression { get; set; }
```

- *Type:* string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#cel_expression GoogleNetworkServicesCdnEdgeExtension#cel_expression}

---

### GoogleNetworkServicesCdnEdgeExtensionTarget <a name="GoogleNetworkServicesCdnEdgeExtensionTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionTarget {
    string[] Resources
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources">Resources</a></code> | <code>string[]</code> | A list of references to the resources that are targeted by CdnEdgeExtension. |

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

A list of references to the resources that are targeted by CdnEdgeExtension.

Types of resources supported: EdgeCacheService.
The format can be 'projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}' or
'//networkservices.googleapis.com/projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#resources GoogleNetworkServicesCdnEdgeExtension#resources}

---

### GoogleNetworkServicesCdnEdgeExtensionTimeouts <a name="GoogleNetworkServicesCdnEdgeExtensionTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get"></a>

```csharp
private GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>[]

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes">ResetForwardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">ResetSupportedEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetForwardAttributes` <a name="ResetForwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes"></a>

```csharp
private void ResetForwardAttributes()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```csharp
private void ResetForwardHeaders()
```

##### `ResetSupportedEvents` <a name="ResetSupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```csharp
private void ResetSupportedEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput">ForwardAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">SupportedEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes">ForwardAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardAttributesInput`<sup>Optional</sup> <a name="ForwardAttributesInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput"></a>

```csharp
public string[] ForwardAttributesInput { get; }
```

- *Type:* string[]

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```csharp
public string[] ForwardHeadersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SupportedEventsInput`<sup>Optional</sup> <a name="SupportedEventsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```csharp
public string[] SupportedEventsInput { get; }
```

- *Type:* string[]

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardAttributes`<sup>Required</sup> <a name="ForwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes"></a>

```csharp
public string[] ForwardAttributes { get; }
```

- *Type:* string[]

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```csharp
public string[] ForwardHeaders { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```csharp
public string[] SupportedEvents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get"></a>

```csharp
private GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChains[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>[]

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">CelExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```csharp
public string CelExpressionInput { get; }
```

- *Type:* string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```csharp
public string CelExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensions` <a name="PutExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions"></a>

```csharp
private void PutExtensions(IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>[]

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```csharp
private void PutMatchCondition(GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions">Extensions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList Extensions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference MatchCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions[] ExtensionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions</a>[]

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition MatchConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionExtensionChains InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains">GoogleNetworkServicesCdnEdgeExtensionExtensionChains</a>

---


### GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesCdnEdgeExtensionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---


### GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesCdnEdgeExtensionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---



