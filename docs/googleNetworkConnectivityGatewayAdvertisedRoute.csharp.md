# `googleNetworkConnectivityGatewayAdvertisedRoute` Submodule <a name="`googleNetworkConnectivityGatewayAdvertisedRoute` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityGatewayAdvertisedRoute <a name="GoogleNetworkConnectivityGatewayAdvertisedRoute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route google_network_connectivity_gateway_advertised_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkConnectivityGatewayAdvertisedRoute(Construct Scope, string Id, GoogleNetworkConnectivityGatewayAdvertisedRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig">GoogleNetworkConnectivityGatewayAdvertisedRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig">GoogleNetworkConnectivityGatewayAdvertisedRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetIpRange">ResetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetIpRange"></a>

```csharp
private void ResetIpRange()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetRecipient"></a>

```csharp
private void ResetRecipient()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkConnectivityGatewayAdvertisedRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkConnectivityGatewayAdvertisedRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkConnectivityGatewayAdvertisedRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkConnectivityGatewayAdvertisedRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkConnectivityGatewayAdvertisedRoute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkConnectivityGatewayAdvertisedRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkConnectivityGatewayAdvertisedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityGatewayAdvertisedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.uniqueId">UniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput">IpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipientInput">RecipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spokeInput">SpokeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipient">Recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spoke">Spoke</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference</a>

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.uniqueId"></a>

```csharp
public string UniqueId { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRangeInput"></a>

```csharp
public string IpRangeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipientInput"></a>

```csharp
public string RecipientInput { get; }
```

- *Type:* string

---

##### `SpokeInput`<sup>Optional</sup> <a name="SpokeInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spokeInput"></a>

```csharp
public string SpokeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.recipient"></a>

```csharp
public string Recipient { get; }
```

- *Type:* string

---

##### `Spoke`<sup>Required</sup> <a name="Spoke" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.spoke"></a>

```csharp
public string Spoke { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityGatewayAdvertisedRouteConfig <a name="GoogleNetworkConnectivityGatewayAdvertisedRouteConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkConnectivityGatewayAdvertisedRouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string Spoke,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    string IpRange = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double Priority = null,
    string Project = null,
    string Recipient = null,
    GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.name">Name</a></code> | <code>string</code> | The name of the gateway advertised route. Route names must be unique. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke">Spoke</a></code> | <code>string</code> | The name of the spoke. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the gateway advertised route. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#id GoogleNetworkConnectivityGatewayAdvertisedRoute#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange">IpRange</a></code> | <code>string</code> | This route's advertised IP address range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.priority">Priority</a></code> | <code>double</code> | The priority of this advertised route. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#project GoogleNetworkConnectivityGatewayAdvertisedRoute#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient">Recipient</a></code> | <code>string</code> | the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#location GoogleNetworkConnectivityGatewayAdvertisedRoute#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the gateway advertised route. Route names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#name GoogleNetworkConnectivityGatewayAdvertisedRoute#name}

---

##### `Spoke`<sup>Required</sup> <a name="Spoke" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.spoke"></a>

```csharp
public string Spoke { get; set; }
```

- *Type:* string

The name of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#spoke GoogleNetworkConnectivityGatewayAdvertisedRoute#spoke}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#deletion_policy GoogleNetworkConnectivityGatewayAdvertisedRoute#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the gateway advertised route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#description GoogleNetworkConnectivityGatewayAdvertisedRoute#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#id GoogleNetworkConnectivityGatewayAdvertisedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.ipRange"></a>

```csharp
public string IpRange { get; set; }
```

- *Type:* string

This route's advertised IP address range.

Must be a valid CIDR-formatted prefix.
If an IP address is provided without a subnet mask, it is interpreted as, for IPv4, a /32 singular IP address range, and, for IPv6, /128

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#ip_range GoogleNetworkConnectivityGatewayAdvertisedRoute#ip_range}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#labels GoogleNetworkConnectivityGatewayAdvertisedRoute#labels}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of this advertised route.

You can choose a value from 0 to 65335.
If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#priority GoogleNetworkConnectivityGatewayAdvertisedRoute#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#project GoogleNetworkConnectivityGatewayAdvertisedRoute#project}.

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.recipient"></a>

```csharp
public string Recipient { get; set; }
```

- *Type:* string

the recipient of this advertised route Possible values: ["RECIPIENT_UNSPECIFIED", "ADVERTISE_TO_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#recipient GoogleNetworkConnectivityGatewayAdvertisedRoute#recipient}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteConfig.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#timeouts GoogleNetworkConnectivityGatewayAdvertisedRoute#timeouts}

---

### GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts <a name="GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#create GoogleNetworkConnectivityGatewayAdvertisedRoute#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#delete GoogleNetworkConnectivityGatewayAdvertisedRoute#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#update GoogleNetworkConnectivityGatewayAdvertisedRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#create GoogleNetworkConnectivityGatewayAdvertisedRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#delete GoogleNetworkConnectivityGatewayAdvertisedRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_connectivity_gateway_advertised_route#update GoogleNetworkConnectivityGatewayAdvertisedRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference <a name="GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkConnectivityGatewayAdvertisedRoute.GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts">GoogleNetworkConnectivityGatewayAdvertisedRouteTimeouts</a>

---



