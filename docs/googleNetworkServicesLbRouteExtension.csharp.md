# `googleNetworkServicesLbRouteExtension` Submodule <a name="`googleNetworkServicesLbRouteExtension` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbRouteExtension <a name="GoogleNetworkServicesLbRouteExtension" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension google_network_services_lb_route_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtension(Construct Scope, string Id, GoogleNetworkServicesLbRouteExtensionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig">GoogleNetworkServicesLbRouteExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains">PutExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionChains` <a name="PutExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains"></a>

```csharp
private void PutExtensionChains(IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChains[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putExtensionChains.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesLbRouteExtensionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesLbRouteExtension.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesLbRouteExtension resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesLbRouteExtension to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesLbRouteExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbRouteExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains">ExtensionChains</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput">ExtensionChainsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput">ForwardingRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules">ForwardingRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChains"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsList ExtensionChains { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeouts"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference">GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExtensionChainsInput`<sup>Optional</sup> <a name="ExtensionChainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.extensionChainsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChains[] ExtensionChainsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

---

##### `ForwardingRulesInput`<sup>Optional</sup> <a name="ForwardingRulesInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRulesInput"></a>

```csharp
public string[] ForwardingRulesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingSchemeInput"></a>

```csharp
public string LoadBalancingSchemeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.forwardingRules"></a>

```csharp
public string[] ForwardingRules { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtension.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbRouteExtensionConfig <a name="GoogleNetworkServicesLbRouteExtensionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChains[] ExtensionChains,
    string[] ForwardingRules,
    string LoadBalancingScheme,
    string Location,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkServicesLbRouteExtensionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains">ExtensionChains</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules">ForwardingRules</a></code> | <code>string[]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location">Location</a></code> | <code>string</code> | The location of the route extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name">Name</a></code> | <code>string</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.extensionChains"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChains[] ExtensionChains { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#extension_chains GoogleNetworkServicesLbRouteExtension#extension_chains}

---

##### `ForwardingRules`<sup>Required</sup> <a name="ForwardingRules" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.forwardingRules"></a>

```csharp
public string[] ForwardingRules { get; set; }
```

- *Type:* string[]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#forwarding_rules GoogleNetworkServicesLbRouteExtension#forwarding_rules}

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; set; }
```

- *Type:* string

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#load_balancing_scheme GoogleNetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#location GoogleNetworkServicesLbRouteExtension#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#description GoogleNetworkServicesLbRouteExtension#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#id GoogleNetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#labels GoogleNetworkServicesLbRouteExtension#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#project GoogleNetworkServicesLbRouteExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#timeouts GoogleNetworkServicesLbRouteExtension#timeouts}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChains <a name="GoogleNetworkServicesLbRouteExtensionExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChains {
    IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[] Extensions,
    GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition MatchCondition,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions">Extensions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]</code> | extensions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name">Name</a></code> | <code>string</code> | The name for this extension chain. |

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.extensions"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[] Extensions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#extensions GoogleNetworkServicesLbRouteExtension#extensions}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.matchCondition"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition MatchCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#match_condition GoogleNetworkServicesLbRouteExtension#match_condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions {
    string Name,
    string Service,
    string Authority = null,
    bool|IResolvable FailOpen = null,
    string[] ForwardHeaders = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    bool|IResolvable ObservabilityMode = null,
    string RequestBodySendMode = null,
    string[] SupportedEvents = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name">Name</a></code> | <code>string</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service">Service</a></code> | <code>string</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority">Authority</a></code> | <code>string</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders">ForwardHeaders</a></code> | <code>string[]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata provided here is included as part of the 'metadata_context' (of type 'google.protobuf.Struct') in the 'ProcessingRequest' message sent to the extension server. The metadata is available under the namespace 'com.google.lb_route_extension.<resource_name>.<chain_name>.<extension_name>'. The following variables are supported in the metadata: '{forwarding_rule_id}' - substituted with the forwarding rule's fully qualified resource name. This field must not be set for plugin extensions. Setting it results in a validation error. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.observabilityMode">ObservabilityMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to 'TRUE', enables 'observability_mode' on the 'ext_proc' filter. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.requestBodySendMode">RequestBodySendMode</a></code> | <code>string</code> | Configures the send mode for request body processing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.supportedEvents">SupportedEvents</a></code> | <code>string[]</code> | A set of events during request or response processing for which this extension is called. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout">Timeout</a></code> | <code>string</code> | Specifies the timeout for each individual message on the stream. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#name GoogleNetworkServicesLbRouteExtension#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The reference to the service that runs the extension.

* To configure a callout extension, service must be a fully-qualified reference to a backend service.
* To configure a plugin extension, service must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#service GoogleNetworkServicesLbRouteExtension#service}

---

##### `Authority`<sup>Optional</sup> <a name="Authority" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority"></a>

```csharp
public string Authority { get; set; }
```

- *Type:* string

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#authority GoogleNetworkServicesLbRouteExtension#authority}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#fail_open GoogleNetworkServicesLbRouteExtension#fail_open}

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```csharp
public string[] ForwardHeaders { get; set; }
```

- *Type:* string[]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#forward_headers GoogleNetworkServicesLbRouteExtension#forward_headers}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata provided here is included as part of the 'metadata_context' (of type 'google.protobuf.Struct') in the 'ProcessingRequest' message sent to the extension server. The metadata is available under the namespace 'com.google.lb_route_extension.<resource_name>.<chain_name>.<extension_name>'. The following variables are supported in the metadata: '{forwarding_rule_id}' - substituted with the forwarding rule's fully qualified resource name. This field must not be set for plugin extensions. Setting it results in a validation error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#metadata GoogleNetworkServicesLbRouteExtension#metadata}

---

##### `ObservabilityMode`<sup>Optional</sup> <a name="ObservabilityMode" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.observabilityMode"></a>

```csharp
public bool|IResolvable ObservabilityMode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to 'TRUE', enables 'observability_mode' on the 'ext_proc' filter.

This makes 'ext_proc' calls asynchronous. Envoy doesn't check for the response from 'ext_proc' calls.
For more information about the filter, see: https://www.envoyproxy.io/docs/envoy/v1.32.3/api-v3/extensions/filters/http/ext_proc/v3/ext_proc.proto
This field is helpful when you want to try out the extension in async log-only mode.
Supported by regional 'LbTrafficExtension' and 'LbRouteExtension' resources.
Only 'STREAMED' (default) body processing mode is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#observability_mode GoogleNetworkServicesLbRouteExtension#observability_mode}

---

##### `RequestBodySendMode`<sup>Optional</sup> <a name="RequestBodySendMode" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.requestBodySendMode"></a>

```csharp
public string RequestBodySendMode { get; set; }
```

- *Type:* string

Configures the send mode for request body processing.

The field can only be set if 'supported_events' includes 'REQUEST_BODY'.
If 'supported_events' includes 'REQUEST_BODY', but 'request_body_send_mode' is unset, the default value 'STREAMED' is used.
When this field is set to 'FULL_DUPLEX_STREAMED', 'supported_events' must include both 'REQUEST_BODY' and 'REQUEST_TRAILERS'.
This field can be set only when the 'service' field of the extension points to a 'BackendService'.
Only 'FULL_DUPLEX_STREAMED' mode is supported for 'LbRouteExtension' resources. Possible values: ["BODY_SEND_MODE_UNSPECIFIED", "BODY_SEND_MODE_STREAMED", "BODY_SEND_MODE_FULL_DUPLEX_STREAMED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#request_body_send_mode GoogleNetworkServicesLbRouteExtension#request_body_send_mode}

---

##### `SupportedEvents`<sup>Optional</sup> <a name="SupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```csharp
public string[] SupportedEvents { get; set; }
```

- *Type:* string[]

A set of events during request or response processing for which this extension is called.

This field is optional for the LbRouteExtension resource. If unspecified, 'REQUEST_HEADERS' event is assumed as supported.
Possible values: 'REQUEST_HEADERS', 'REQUEST_BODY', 'REQUEST_TRAILERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#supported_events GoogleNetworkServicesLbRouteExtension#supported_events}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#timeout GoogleNetworkServicesLbRouteExtension#timeout}

---

### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition {
    string CelExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression">CelExpression</a></code> | <code>string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```csharp
public string CelExpression { get; set; }
```

- *Type:* string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#cel_expression GoogleNetworkServicesLbRouteExtension#cel_expression}

---

### GoogleNetworkServicesLbRouteExtensionTimeouts <a name="GoogleNetworkServicesLbRouteExtensionTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#create GoogleNetworkServicesLbRouteExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#delete GoogleNetworkServicesLbRouteExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_lb_route_extension#update GoogleNetworkServicesLbRouteExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get"></a>

```csharp
private GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority">ResetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetObservabilityMode">ResetObservabilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetRequestBodySendMode">ResetRequestBodySendMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">ResetSupportedEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthority` <a name="ResetAuthority" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```csharp
private void ResetAuthority()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```csharp
private void ResetForwardHeaders()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetObservabilityMode` <a name="ResetObservabilityMode" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetObservabilityMode"></a>

```csharp
private void ResetObservabilityMode()
```

##### `ResetRequestBodySendMode` <a name="ResetRequestBodySendMode" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetRequestBodySendMode"></a>

```csharp
private void ResetRequestBodySendMode()
```

##### `ResetSupportedEvents` <a name="ResetSupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```csharp
private void ResetSupportedEvents()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">AuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.observabilityModeInput">ObservabilityModeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.requestBodySendModeInput">RequestBodySendModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">SupportedEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority">Authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen">FailOpen</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.observabilityMode">ObservabilityMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.requestBodySendMode">RequestBodySendMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```csharp
public string AuthorityInput { get; }
```

- *Type:* string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```csharp
public bool|IResolvable FailOpenInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```csharp
public string[] ForwardHeadersInput { get; }
```

- *Type:* string[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObservabilityModeInput`<sup>Optional</sup> <a name="ObservabilityModeInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.observabilityModeInput"></a>

```csharp
public bool|IResolvable ObservabilityModeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequestBodySendModeInput`<sup>Optional</sup> <a name="RequestBodySendModeInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.requestBodySendModeInput"></a>

```csharp
public string RequestBodySendModeInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SupportedEventsInput`<sup>Optional</sup> <a name="SupportedEventsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```csharp
public string[] SupportedEventsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```csharp
public string Authority { get; }
```

- *Type:* string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```csharp
public bool|IResolvable FailOpen { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```csharp
public string[] ForwardHeaders { get; }
```

- *Type:* string[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObservabilityMode`<sup>Required</sup> <a name="ObservabilityMode" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.observabilityMode"></a>

```csharp
public bool|IResolvable ObservabilityMode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequestBodySendMode`<sup>Required</sup> <a name="RequestBodySendMode" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.requestBodySendMode"></a>

```csharp
public string RequestBodySendMode { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```csharp
public string[] SupportedEvents { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsList <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsList" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get"></a>

```csharp
private GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChains[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>[]

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">CelExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```csharp
public string CelExpressionInput { get; }
```

- *Type:* string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```csharp
public string CelExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensions` <a name="PutExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions"></a>

```csharp
private void PutExtensions(IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```csharp
private void PutMatchCondition(GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions">Extensions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList Extensions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference MatchCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions[] ExtensionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions">GoogleNetworkServicesLbRouteExtensionExtensionChainsExtensions</a>[]

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```csharp
public GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition MatchConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionExtensionChains InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionExtensionChains">GoogleNetworkServicesLbRouteExtensionExtensionChains</a>

---


### GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesLbRouteExtensionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesLbRouteExtension.GoogleNetworkServicesLbRouteExtensionTimeouts">GoogleNetworkServicesLbRouteExtensionTimeouts</a>

---



